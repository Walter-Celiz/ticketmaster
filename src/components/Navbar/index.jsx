/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

export const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // console.log("1010 effect");
  }, [search, onSearch]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginBottom: 10
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1
        }}
      >
        <p
          style={{
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          Mi boletera
        </p>
      </div>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
        style={{
          fontSize: 16,
          // padding: "6px",
          borderRadius: 4,
          border: "none",
          // width: 200
        }}
      />
    </div>
  );
};
