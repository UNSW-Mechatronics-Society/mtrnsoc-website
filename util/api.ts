/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntryCollection, createClient } from "contentful";
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
  ]);

  try {
    // https://www.contentful.com/developers/docs/tutorials/general/modifying-api-responses/
    const res = await client.getEntries({ content_type: "events", select: selectFields });
    const events: Event[] = processResponseIntoEvents(res);

    return [events, null];
  } catch (err) {
    return [null, err];
  }
};

const processResponseIntoEvents = (res: EntryCollection<unknown>) => {
  const events: Event[] = [];
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
  return events;
};

export const getCurrentEvents = async (): Promise<[Event[] | null, null | Error | unknown]> => {
  /**
   * NOTE: Contentful does not allow for a OR query, so 2 queries must be concatenated.
   * So, in order to get the currentEvents, we need to find events such that:
   * (startDate >= currentDate && endDate === null) || endDate >= currentDate
   */
  try {
    const selectFields = createContentfulSelect([
      "title",
      "facebookEventUrl",
      "location",
      "bannerImage",
      "startDate",
      "endDate",
    ]);

    const currentDate = new Date().toISOString();

    /**
     * Get all events that:
     * - startDate >= currentDate
     * - endDate === null (does not exist)
     */
    const res1 = await client.getEntries({
      content_type: "events",
      select: selectFields,
      limit: 200,
      "fields.startDate[gte]": currentDate,
      "fields.endDate[exists]": false,
    });
    const events1 = processResponseIntoEvents(res1);

    /**
     * Get all events that:
     * - endDate >= currentDate
     */
    const res2 = await client.getEntries({
      content_type: "events",
      select: selectFields,
      limit: 200,
      "fields.endDate[gte]": currentDate,
    });
    const events2 = processResponseIntoEvents(res2);

    return [events1.concat(events2), null];
  } catch (err) {
    return [null, err];
  }
};

export default getEvents;
