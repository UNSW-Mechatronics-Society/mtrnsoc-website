import eventData, { eventDetails } from "data/eventsData";
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  success: boolean;
  message?: string;
  data?: eventDetails[];
};

/**
 * Handler for /api/currentEvents
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

  const currentEvents = eventData.filter((x) => {
    const oldestDate = Math.max(
      ...x.date.map((y) => (y.endDate !== null ? y.endDate : y.startDate)),
    );
    return oldestDate >= Date.now();
  });

  return res.status(200).json({ success: true, data: currentEvents });
};

export default handler;
