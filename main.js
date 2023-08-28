const fastify = require("fastify")();

fastify.get("/hello", (request, reply) => {
  reply.send({
    message: "Hello Fastify",
  });
});

fastify.listen({ port: 2121 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at: ${address}`);
});
