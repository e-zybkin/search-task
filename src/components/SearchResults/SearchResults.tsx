import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import Loader from "../Loader/Loader";

import "./style.css";

export function SearchResults({
  research,
  isLoading,
}: {
  research: string;
  isLoading: boolean;
}) {
  const { users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {isLoading && <Loader />}
      {research.length > 0 && !isLoading && users.length === 0 && (
        <p>Не нашёл( </p>
      )}
      {research.length === 0 && (
        <p>Введите что нибудь в поисковую строку (^-^)</p>
      )}
      {users.length > 0 &&
        !isLoading &&
        users.map((user) => <UserCard {...user} key={user.id} />)}
    </div>
  );
}
