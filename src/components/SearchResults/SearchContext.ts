import { createContext } from "react";
import { User } from "../../utils/interfaces";

type contextType = {
  users: User[];
};

export const SearchContext = createContext<contextType>({ users: [] });
