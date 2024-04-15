import React, { createContext, useContext, useState } from "react";

const DataSourceContext = createContext();

export function useDataSource() {
  return useContext(DataSourceContext);
}

export const DataSourceProvider = ({ children }) => {
  const [isProjection, setIsProjection] = useState(false);

  const toggleProjection = () => {
    setIsProjection(!isProjection);
  };

  const switchToProjection = () => {
    setIsProjection(true);
  };

  const switchToActual = () => {
    setIsProjection(false);
  };

  return (
    <DataSourceContext.Provider
      value={{
        isProjection,
        toggleProjection,
        switchToProjection,
        switchToActual,
      }}
    >
      {children}
    </DataSourceContext.Provider>
  );
};
