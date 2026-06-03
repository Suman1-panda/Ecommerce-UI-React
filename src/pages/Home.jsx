import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      description: "Latest Apple smartphone with A16 chip",
      price: 80000,
      image: "https://smpl-prod-app-v2.gumlet.io/product_img/14507/1694714687_bw9.jpg"
    },
    {
      id: 2,
      name: "Dell Laptop",
      description: "High performance gaming laptop",
      price: 60000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise cancelling wireless headphones",
      price: 3000,
      image:
        "https://m.media-amazon.com/images/I/71PdaCws72L._SX522_.jpg"
    },
    {
      id: 4,
      name: "Smart Watch",
      description: "Fitness tracking smartwatch",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Samsung S24",
      description: "Android flagship phone",
      price: 90000,
      image:
        "https://m.media-amazon.com/images/I/41CWaVoK+xL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      id: 6,
      name: "Gaming PC",
      description: "High end gaming setup",
      price: 200000,
      image:
        "https://m.media-amazon.com/images/I/7136hMkIEBL._SX522_.jpg"
    },
    {
      id: 7,
      name: "MacBook Air M2",
      description: "Apple lightweight laptop",
      price: 110000,
      image:
        "https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg"
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      description: "RGB gaming keyboard",
      price: 7000,
      image:
        "https://m.media-amazon.com/images/I/715k1wj5VNL._SX522_.jpg"
    },
    {
      id: 9,
      name: "Logitech Mouse",
      description: "Wireless mouse",
      price: 2500,
      image:
        "https://m.media-amazon.com/images/I/61ADOTrUc-L._SX679_.jpg"
    }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>🛍️ Our Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
    minHeight: "100vh",
    padding: "20px"
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "30px",
    color: "#333"
  },

  search: {
    display: "block",
    margin: "0 auto 25px",
    padding: "10px",
    width: "280px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }
};

export default Home;