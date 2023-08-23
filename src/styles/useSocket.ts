import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useStoreState } from "../shared/hooks/store-hook";

type UseSocketProps = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};

export function useSocket(): UseSocketProps {
  const { token } = useStoreState((state) => state.session);

  const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(
    "http://localhost:8080",
    {
      transports: ["websocket", "polling"],
      query: { token: token },
    }
  );

  return {
    socket,
  };
}
