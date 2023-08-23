import { store } from "./stores";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const id = store.getState().session.token;

export const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
  "http://localhost:8080",
  {
    transports: ["websocket", "polling"],
    query: { token: id },
  }
);
