import { Elysia } from "elysia";
import handler from '@elysiajs/node'

const app = new Elysia().get("/", () => "Hello Elysia").listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export default handler()
