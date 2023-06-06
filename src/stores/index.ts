import { Actions, createStore, persist, State } from "easy-peasy";
import { userModel, UserModel } from "./user-store";
import { ISessionModel, sessionModel } from "./session-store";

export interface StoreModel {
  user: UserModel;
  session: ISessionModel;
}

const model: StoreModel = {
  user: userModel,
  session: sessionModel,
};

export type ActionModel = Actions<StoreModel>;

export type StateModel = State<StoreModel>;

const store = createStore(persist(model, { storage: "localStorage" }));

export { store };
