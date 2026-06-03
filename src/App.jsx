import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        setPage={setPage}
      />

      {page === "home" ? (
        <Home addToCart={addToCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
}

export default App;