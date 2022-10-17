import React from "react";

import { AppRouter } from "./core/router/app-router";

interface MyContextModel {
  filter: string;
  setFilter: (value: string) => void;
}

export const MyContext = React.createContext<MyContextModel>(null);

const MyContextProvider = (props) => {
  const { children } = props;
  const [filter, setFilter] = React.useState("lemoncode");
  return (
    <MyContext.Provider value={{ filter, setFilter }}>
      {children}
    </MyContext.Provider>
  );
};

export const App = () => {
  return (
    <MyContextProvider>
      <AppRouter />
    </MyContextProvider>
  );
};
