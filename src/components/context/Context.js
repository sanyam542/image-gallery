import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(null);

  return (
    <Context.Provider
      value={{
        keyword,
        setKeyword,
      }}
    >
      {children}
    </Context.Provider>
  );
};
