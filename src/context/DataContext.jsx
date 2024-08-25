import React from "react";
import { createContext, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("All");
  const obj = {
    search,
    setSearch,
    select,
    setSelect,
  };
  return <DataContext.Provider value={obj}>{children}</DataContext.Provider>;
}

export { DataProvider };
