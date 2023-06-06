export type IOldChat = {
  name: string;
  user?: string; // user { name: string, image: string, lastime: date, id: string }
  chats?: string; // {}[]
  message: string; // messages string[]  {mensaje : string, fecha: Date}
};
