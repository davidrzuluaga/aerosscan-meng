import { createContext, useState } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const dataState = {
    setUser,
    user,
  };

  return (
    <DataContext.Provider value={dataState}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
