import React from "react";

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>🛒 Cart</h1>

      {cart.length === 0 ? (
        <h2 style={styles.empty}>Cart is Empty 😢</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.card}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />

              <div>
                <h2>{item.name}</h2>
                <p>₹ {item.price}</p>
                <p>Qty: {item.qty}</p>

                <button
                  onClick={() => removeItem(item.id)}
                  style={styles.btn}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2 style={styles.total}>
            Total: ₹ {total}
          </h2>
        </>
      )}
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
    background: "#f5f7fa",
    minHeight: "100vh"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px"
  },

  empty: {
    textAlign: "center",
    color: "gray"
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "white",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  image: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  btn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px"
  },

  total: {
    textAlign: "center",
    marginTop: "20px",
    color: "green"
  }
};

export default Cart;