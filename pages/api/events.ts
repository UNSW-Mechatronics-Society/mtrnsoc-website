// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import eventData, { eventDetails } from "data/eventsData";

export type Data = {
  success: boolean;
  message?: string;
  data?: eventDetails[];
};

/**
 * @swagger
 * /api/events:
 *  get:
 *    summary: Get event details
 *    parameters:
 *      - name: limit
 *        in: query
 *        required: false
 *        description: Max limit of events returned. Must be > 1
 *        schema:
 *          type: integer
 *          example: 3
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
 *      '400':
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                  example: false
 *                message:
 *                  type: string
 *                  example: "Error message"
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
