import Fastify from "fastify";
import websocket from "@fastify/websocket";

const fastify = Fastify();
await fastify.register(websocket);

fastify.get("/", { websocket: true }, function wsHandler(connection, req) {
  // Client connect
  console.log("Client connected");
  // Client message
  connection.socket.on("message", (message) => {
    console.log(`Client message: ${message}`);
    console.log(`Client message: ${message.toString()}`);
    connection.socket.send("hi from server");
  });
  // Client disconnect
  connection.socket.on("close", () => {
    console.log("Client disconnected");
  });
});

await fastify.listen({ port: 2121 });
