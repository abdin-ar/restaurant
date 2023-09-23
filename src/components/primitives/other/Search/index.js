import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Button from "../../buttons/Button";
import "./search.css";

const Search = ({ query, className }) => {
  const [searchInput, setSearchInput] = useState(query || "");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchInput(query || "");
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = createSearchParams({ query: searchInput }).toString();
    navigate(`/menu?${query}`);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form
      className={`search ${className}`}
      title="Search Menu"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <Button type="submit" title="Search">
        <i className="fas fa-search"></i>
      </Button>
    </form>
  );
};
export default Search;
