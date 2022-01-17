import handler from "pages/api/currentEvents";
import { runHandlerTest } from "./testHelper";

describe("/api/currentEvents", () => {
  test("Failure on post request", async () => {
    runHandlerTest(handler, async ({ fetch }) => {
      const res = await fetch({ method: "POST" });
      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.success).toBeFalsy();
      expect(typeof data.message).toBe("string");
    });
  });
  test("Fetch data through GET", async () => {
    await runHandlerTest(handler, async ({ fetch }) => {
      const res = await fetch({ method: "GET" });
      expect(res.status).toBe(200);
      const data = await res.json();
      expect(data.success).toBeTruthy();
    });
  });
});
