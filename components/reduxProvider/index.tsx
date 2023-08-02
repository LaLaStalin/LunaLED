"use client";

import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { ReactNode } from "react";

const reduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default reduxProvider;
