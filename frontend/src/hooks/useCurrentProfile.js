//hook to access selected profile

import { useContext } from "react";
import CurrentProfileContext from "../context/CurrentProfileContext";

//use this whenever you need the currently selected profile
export const useCurrentProfile = () => useContext(CurrentProfileContext);
