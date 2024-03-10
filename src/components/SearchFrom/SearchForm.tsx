import "./styles.css";

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    onSearch(e.target.value);
  };

  return (
    <div className="searchForm">
      <form>
        <input
          placeholder="Пользователь"
          type="text"
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}
