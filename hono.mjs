import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/", (c) => {
  return c.text(c.body);
});

const port = 3300;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
