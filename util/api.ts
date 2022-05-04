/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "contentful";
import moment from "moment";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
});

export type EventDetails = {
  title: string;
  facebookEventLink: string;
  imagePath: string;
  location: string | null;
  startDate: number;
  endDate: number | null;
};

type ImageAsset = {
  title: string;
  id: string;
  url: string;
  description: string;
};

export const CONTENTFUL_BAD_IMAGE = "CONTENTFUL_BAD_IMAGE";

const getEvents = async (): Promise<[EventDetails[] | null, null | Error | unknown]> => {
  const events: EventDetails[] = [];
  try {
    const res = await client.getEntries({ content_type: "events" });
    const items = res.items;
    const includes = res.includes;

    // if (res.errors !== undefined) {
    //   console.log("error exists");
    // }

    let assets: ImageAsset[] = [];

    // Sort images into assets
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

    items.forEach((entry: any) => {
      const { fields } = entry;
      const imageUrl = assets.find((x) => x.id === fields.bannerImage.sys.id);

      // REVIEW: Rework this error handling
      if (imageUrl === undefined) {
        if (process.env.NODE_ENV !== "production") {
          const error = new Error(
            `Could not find the matching image for event titled: ${fields.title}`,
          );
          error.name = CONTENTFUL_BAD_IMAGE;
          throw error;
        } else {
          // skip. Don't add event with no valid image url in production
          return;
        }
      }

      events.push({
        title: fields.title as string,
        facebookEventLink: fields.facebookEventUrl as string,
        location: fields.location as string | null,
        startDate: moment(fields.startDate as string).unix(),
        endDate: fields.endDate === undefined ? null : moment(fields.endDate as string).unix(),
        imagePath: imageUrl.url,
      });
    });
    return [events, null];
  } catch (err) {
    return [null, err];
  }
};

export default getEvents;
