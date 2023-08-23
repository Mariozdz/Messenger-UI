import { IMessage } from "../types/i-message";
import { IChat } from "../types/i-chat";
import { IUser } from "../types/i-user";

export const MessageStub: IMessage = {
  content:
    "Nuevo Mensaje porque sí con un mensaje mas largo de lo normal pero tambien se puede probar para unas 4 lieansd de txto que n o quiero que se vean demas pero parece que necesita un minmo de 15 porque si no no va a datr la talla xdxdx",
  from: "Mario",
  groupID: "11",
  id: "2",
  isRead: false,
  readBy: undefined,
  sentDate: new Date(),
};

export const UserStub: IUser = {
  phoneNumber: "88445544",
  zoneCode: "506",
  state: "Hola mundo",
  userName: "Perro pelón",
  url: "",
};

export const ChatStub: IChat = {
  admins: [],
  description: "",
  groupName: "",
  id: "CHAT1",
  isChat: false,
  members: [UserStub],
  messages: [MessageStub],
  url: "",
};

export const UserChatsStub: IChat[] = [
  ChatStub,
  { ...ChatStub, id: "CHAT2" },
  { ...ChatStub, id: "CHAT3" },
  { ...ChatStub, id: "CHAT4" },
  { ...ChatStub, id: "CHAT5" },
  { ...ChatStub, id: "CHAT6" },
  { ...ChatStub, id: "CHAT7" },
  { ...ChatStub, id: "CHAT8" },
  { ...ChatStub, id: "CHAT9" },
];
