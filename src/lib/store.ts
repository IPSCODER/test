import { configureStore } from "@reduxjs/toolkit";
import { actionReducer } from "./features/actionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      actions: actionReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];