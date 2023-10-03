import { useState } from "react";
import { Navbar, Events } from "./components";
import "./App.css";

export function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  );
}
