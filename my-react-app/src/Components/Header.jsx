// Header component: Header.jsx
import React, { useContext } from "react";
import { AppContext } from "../App";

const Header = ({ onSearch }) => {
  const { theme, setTheme } = useContext(AppContext);
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header>
      <h1>Twitter Clone</h1>
      <div className="theme-toggle"></div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search tweets..."
        onKeyDown={handleSearch}
      />
    </header>
  );
};

export default Header;
