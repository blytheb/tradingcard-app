import { createContext, useState } from "react";

const CurrentProfileContext = createContext();

//stores current selected profile
export const CurrentProfileProvider = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState(null);

  return (
    <CurrentProfileContext.Provider value={{ currentProfile, setCurrentProfile }}>
      {children}
    </CurrentProfileContext.Provider>
  );
};

export default CurrentProfileContext;
