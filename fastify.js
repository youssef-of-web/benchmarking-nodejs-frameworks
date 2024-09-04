const fastify = require("fastify")();

fastify.get("/", async (request, reply) => {
  return "Hello World!";
});

fastify.post("/", async (request, reply) => {
  return request.body;
});

fastify.listen(3200, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Fastify server is running on ${address}`);
});
