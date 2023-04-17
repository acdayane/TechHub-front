import { School, UserData } from "@/types/index.types";
import React, { useState, useContext } from "react";

interface IGlobalContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  user: UserData | null;
  setUser: (user: UserData | null) => void;
  schoolsList: School[] | null;
  setSchoolsList: (schools: School[] | null) => void;
}

const GlobalContext = React.createContext<IGlobalContextProps>({
  token: null,
  setToken: () => null,
  user: null,
  setUser: () => null,
  schoolsList: null,
  setSchoolsList: () => null,
});

export const GlobalContextProvider = (props: any) => {
  const [currentToken, setCurrentToken] = useState<string | null>(null);
  const [schools, setSchools] = useState<School[] | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        token: currentToken,
        setToken: setCurrentToken,
        user: userData,
        setUser: setUserData,
        schoolsList: schools,
        setSchoolsList: setSchools,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
