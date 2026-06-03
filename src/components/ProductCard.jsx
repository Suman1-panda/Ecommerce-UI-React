import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <h3 style={styles.title}>{product.name}</h3>

      <p style={styles.desc}>{product.description}</p>

      <h4 style={styles.price}>₹ {product.price}</h4>

      <button
        style={styles.btn}
        onClick={() => {
          alert("Button Working");
          addToCart(product);
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  title: {
    fontSize: "18px",
    margin: "10px 0 5px"
  },
  desc: {
    fontSize: "14px",
    color: "#555"
  },
  price: {
    margin: "10px 0",
    color: "green"
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductCard;