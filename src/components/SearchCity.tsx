import React, { FunctionComponent, useState } from "react";
import { SearchCityProps } from "../types/SearchCity";

const SearchCity: FunctionComponent<SearchCityProps> = ({ setCities }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const cityList = query.split(",").map((city) => city.trim());
      setCities(cityList);
      setQuery("");
    } else {
      setCities([]);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchCity;
