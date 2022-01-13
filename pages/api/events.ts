// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import eventData, { eventDetails } from "data/eventsData";
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  success: boolean;
  message?: string;
  data?: eventDetails[];
};

/**
 * Handler for /api/events
 *
 * Optional parameters:
 * - limit: integer as string specifying the max number of events to return
 *
 * Status Codes:
 * - 400: failure, with 'message'
 * - 200: success, with 'data'
 *
 * @param req
 * @param res
 * @returns
 */
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  if (method !== "GET")
    return res.status(400).json({ success: false, message: "Only GET requests are allowed." });

  // 'limit' parameter in GET request
  if ("limit" in req.query) {
    const { limit } = req.query;
    const parsedLimit = parseInt(String(limit));
    if (isNaN(parsedLimit) || parsedLimit <= 0)
      return res
        .status(400)
        .json({ success: false, message: "'limit' parameter has to be a valid integer > 0" });

    return res.status(200).json({ success: true, data: eventData.slice(0, parsedLimit) });
  }
  // No limit, return all
  return res.status(200).json({ success: true, data: eventData });
};

export default handler;
