import { IUser } from "./i-user";
import { IMessage } from "./i-message";

export interface IChat {
  id: string;
  members: IUser[];
  groupName?: string;
  description: string;
  isChat: boolean;
  admins: IUser[];
  messages?: IMessage[];
  url?: string;
}
