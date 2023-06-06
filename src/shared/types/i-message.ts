import { IUser } from "./i-user";

export type IMessage = {
  id?: string;
  groupID?: string;
  from: string;
  content: string;
  readBy?: IUser;
  isRead: boolean;
  sentDate: Date;
};
