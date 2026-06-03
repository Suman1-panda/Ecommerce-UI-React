import React from "react";

const Navbar = ({ cartCount, setPage }) => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🛒 Suman - Shop</h2>

      {/* SEARCH BAR */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search products..."
          style={styles.input}
        />
        <button style={styles.searchBtn}>Search</button>
      </div>

      <div style={styles.links}>
        <span style={styles.link} onClick={() => setPage("home")}>
          Home
        </span>

        <span style={styles.link} onClick={() => setPage("cart")}>
          Cart 🛒 ({cartCount})
        </span>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#111",
    color: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    flexWrap: "wrap"
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ffcc00"
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "5px"
  },

  input: {
    padding: "6px 10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    width: "180px"
  },

  searchBtn: {
    padding: "6px 10px",
    backgroundColor: "#ffcc00",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },

  link: {
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "0.3s"
  }
};

export default Navbar;