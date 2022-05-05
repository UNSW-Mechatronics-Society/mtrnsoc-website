/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "contentful";
import moment from "moment";
import { Event, EventDetail } from "./eventsHelpers";

export const CONTENTFUL_BAD_IMAGE = "CONTENTFUL_BAD_IMAGE";

type ImageAsset = {
  title: string;
  id: string;
  url: string;
  description: string;
};

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
});

/**
 * Convert array of string fields into contentful fields
 * @param fieldsToGet array of fields
 * @returns
 */
const createContentfulSelect = (fieldsToGet: string[]): string => {
  // Refer to content model for specific names
  return [...fieldsToGet].map((x) => `fields.${x}`).join(",");
};

const getEvents = async (): Promise<[Event[] | null, null | Error | unknown]> => {
  // Refer to content model for specific names
  const selectFields = createContentfulSelect([
    "title",
    "facebookEventUrl",
    "location",
    "bannerImage",
    "startDate",
    "endDate",
    "displayInPastEvents",
  ]);

  const events: Event[] = [];

  try {
    // https://www.contentful.com/developers/docs/tutorials/general/modifying-api-responses/
    const res = await client.getEntries({ content_type: "events", select: selectFields });
    const items = res.items;
    const includes = res.includes;

    // Parse image data in "includes" into assets array
    let assets: ImageAsset[] = [];

    if (includes !== undefined) {
      assets = includes.Asset.map((entry: any) => {
        const { sys, fields } = entry;
        return {
          title: fields.title as string,
          description: fields.description as string,
          url: fields.file.url as string,
          id: sys.id as string,
        };
      });
    }

    // Parse each item of content_type "events" into `Event` class
    items.forEach((entry: any) => {
      const { fields } = entry;
      const imageUrl = assets.find((x) => x.id === fields.bannerImage.sys.id); // Get image url from assets

      // REVIEW: Rework this error handling
      if (imageUrl === undefined) {
        // Could not find imageUrl in "include" assets
        if (process.env.NODE_ENV !== "production") {
          const error = new Error(
            `Could not find the matching image for event titled: ${fields.title}`,
          );
          error.name = CONTENTFUL_BAD_IMAGE;
          throw error;
        } else {
          // skip
          // Don't add event with no valid image url in production
          return;
        }
      }

      const newEvent = new Event(
        fields.title as string,
        fields.facebookEventUrl as string,
        fields.location === undefined ? null : fields.location,
        imageUrl.url,
        moment(fields.startDate as string).unix(),
        fields.endDate === undefined ? null : moment(fields.endDate as string).unix(),
      );

      events.push(newEvent);
    });
    return [events, null];
  } catch (err) {
    return [null, err];
  }
};

export default getEvents;
