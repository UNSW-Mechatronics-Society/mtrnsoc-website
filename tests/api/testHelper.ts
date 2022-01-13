/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { FetchReturnType, testApiHandler } from "next-test-api-route-handler";

/**
 * Wrapper around `testApiHandler`.
 * @param handlerToTest handler from /api/...
 * @param testLogicFunction callback function with test logic
 * @param fetchParams optional parameters for fetch request
 */
export const runHandlerTest = async <Type>(
  handlerToTest: (req: NextApiRequest, res: NextApiResponse<Type>) => void,
  testLogicFunction: ({ fetch }: { fetch: (init?: any) => FetchReturnType<Type> }) => Promise<void>,
  fetchParams?: ((params: Record<string, unknown>) => string) | undefined,
) => {
  await testApiHandler({
    handler: handlerToTest,
    test: testLogicFunction,
    paramsPatcher: fetchParams,
  });
};
