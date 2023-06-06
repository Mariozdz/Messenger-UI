import { action, Action } from "easy-peasy";

interface ISession {
  token?: string;
}

export interface ISessionModel extends ISession {
  setToken: Action<ISessionModel, ISession | undefined>;
}

const initialState: ISession = {
  token: undefined,
};

const sessionModel: ISessionModel = {
  ...initialState,
  setToken: action((state, payload) => {
    state.token = payload?.token;
  }),
};

export { sessionModel };
