/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const initialState = {
  inputForm1: "",
  submittedForm1: "",
  isSubmittedStrPalindrome: false,
  isForm2Open: false,
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
