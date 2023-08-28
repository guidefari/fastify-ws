import Fastify from "fastify";
import websocket from "@fastify/websocket";

const fastify = Fastify();
await fastify.register(websocket);

fastify.get("/", { websocket: true }, function wsHandler(connection, req) {
  connection.socket.on("message", (message) => {
    // message.toString() === 'hi from client'
    connection.socket.send("hi from server");
  });
});

await fastify.listen({ port: 2121 });
