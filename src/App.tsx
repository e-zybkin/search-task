import { useState, useRef } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import * as usersApi from "./utils/usersApi";

import { User } from "./utils/interfaces";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [research, setResearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const timeoutId = useRef<number | null>(null);

  function handleSearchUsers(t: number): (search: string) => void {
    return function (search: string): void {
      setResearch(search);
      clearTimeout(timeoutId.current || 0);
      if (search.length === 0) {
        setIsLoading(false);
        setUsers([]);
      } else {
        setIsLoading(true);
        timeoutId.current = setTimeout(() => {
          usersApi
            .getUsers(search)
            .then((res) => {
              setUsers(res.users);
            })
            .catch((error) => {
              console.log("ОШИБКА: ", error);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }, t);
      }
    };
  }

  const onSearch: (search: string) => void = handleSearchUsers(1200);

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm onSearch={onSearch} />
      <SearchResults research={research} isLoading={isLoading} />
    </SearchContext.Provider>
  );
}
