import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "../../stores";

const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks<StoreModel>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
