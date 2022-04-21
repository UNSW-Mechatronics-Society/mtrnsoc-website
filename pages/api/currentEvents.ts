import type { NextApiRequest, NextApiResponse } from "next";
import eventData, { eventDetails } from "data/eventsData";

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

/**
 * @swagger
 * /api/currentEvents:
 *  get:
 *    summary: Get all current events
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      title:
 *                        type: string
 *                        example: "Example event title"
 *                      facebookEventLink:
 *                        type: string
 *                        example: "https://www.facebook.com/"
 *                      description:
 *                        type:
 *                          - string
 *                          - null
 *                        example: "Example event description"
 *                      location:
 *                        type:
 *                          - string
 *                          - null
 *                        example: null
 *                      date:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            startDate:
 *                              type: integer
 *                              example: 1637902800
 *                            endDate:
 *                              type: integer
 *                              example: 1637913600
 */
const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  if (method !== "GET")
    return res.status(400).json({ success: false, message: "Only GET requests are allowed." });

  const currentEvents = eventData.filter((x) => {
    const oldestDate = Math.max(
      ...x.date.map((y) => (y.endDate !== null ? y.endDate : y.startDate)),
    );
    // as Date.now() is in milliseconds
    return oldestDate * 1000 >= Date.now();
  });

  return res.status(200).json({ success: true, data: currentEvents });
};

export default handler;
