import handler, { Data } from "pages/api/events";
import eventData from "data/eventsData";
import { runHandlerTest } from "./testHelper";

describe("/api/events", () => {
  test("Failure on post request", async () => {
    runHandlerTest<Data>(handler, async ({ fetch }) => {
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
  test("Fetch data using limit of 1", async () => {
    await runHandlerTest(
      handler,
      async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        expect(res.status).toBe(200);
        const data = await res.json();
        if (!data.data) throw new Error("data does not exist");
        expect(data.data.length).toBe(1);
      },
      (params) => (params.limit = "1"),
    );
  });
  test("Fetch data using limit of 5", async () => {
    await runHandlerTest(
      handler,
      async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        expect(res.status).toBe(200);
        const data = await res.json();
        if (!data.data) throw new Error("data does not exist");
        expect(data.data.length).toBe(5);
      },
      (params) => (params.limit = "5"),
    );
  });
  test("Fetch data using limit of 999999", async () => {
    await runHandlerTest(
      handler,
      async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        expect(res.status).toBe(200);
        const data = await res.json();
        if (!data.data) throw new Error("data does not exist");
        expect(data.data.length === eventData.length).toBeTruthy();
      },
      (params) => (params.limit = "999999"),
    );
  });
});
