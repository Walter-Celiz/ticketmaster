import { useState } from "react";
import { Navbar, Events } from "../../components";

export const Home = () => {
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
};
