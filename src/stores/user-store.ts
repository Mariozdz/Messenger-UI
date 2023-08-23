import { action, Action } from "easy-peasy";
import { IUser } from "../shared/types/i-user";

export interface UserModel extends IUser {
  setUser: Action<UserModel, IUser | undefined>;
}

const initialState: IUser = {
  phoneNumber: undefined,
  zoneCode: undefined,
  state: undefined,
  userName: undefined,
  url: undefined,
};

const userModel: UserModel = {
  ...initialState,
  setUser: action((state, payload) => {
    if (payload) {
      state.phoneNumber = payload.phoneNumber;
      state.zoneCode = payload.phoneNumber;
      state.state = payload.state;
      state.userName = payload.userName;
      state.url = payload.url;
    }
  }),
};

export { userModel };
