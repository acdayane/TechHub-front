import React, { useState, useContext } from 'react';

interface IGlobalContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

const GlobalContext = React.createContext<IGlobalContextProps>({
  token: null,
  setToken: () => null,
});

export const GlobalContextProvider = (props: any) => {
    const [currentToken, setCurrentToken] = useState<string | null>(null);
     
    return (
      <GlobalContext.Provider
        value={{
          token: currentToken,
          setToken: setCurrentToken,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  };

export const useGlobalContext = () => useContext(GlobalContext);