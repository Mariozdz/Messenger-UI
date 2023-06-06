import { action, Action } from "easy-peasy";
import { IUser } from "../shared/types/i-user";

export interface UserModel extends IUser {
  setUser: Action<UserModel, IUser | undefined>;
}

const initialState: IUser = {
  phoneNumber: undefined,
  zoneCode: undefined,
  state: undefined,
  UserName: undefined,
  url: undefined,
};

const userModel: UserModel = {
  ...initialState,
  setUser: action((state, payload) => {
    if (payload) {
      state = payload;
    }
  }),
};

export { userModel };
