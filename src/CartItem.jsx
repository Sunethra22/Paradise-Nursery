import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cart.cartItems || []
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const changeQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      maxWidth: "1100px",
      margin: "0 auto"
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
        background: "#245c35",
        color: "white",
        padding: "15px 25px",
        borderRadius: "8px",
        marginBottom: "30px"
      }}>
        <h2>Paradise Nursery</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "white" }}>Home</a>
          <a href="/plants" style={{ color: "white" }}>Plants</a>
          <a href="/cart" style={{ color: "white" }}>
            🛒 Cart ({cartItems.reduce(
              (sum, item) => sum + item.quantity, 0
            )})
          </a>
        </div>
      </nav>

      <h1 style={{ color: "#245c35", textAlign: "center" }}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "40px 10px"
        }}>
          <h2>Your cart is empty!</h2>
          <p>Discover beautiful plants for your home.</p>
          <button
            onClick={() => {
              window.location.href = "/plants";
            }}
            style={{
              marginTop: "20px",
              padding: "12px 22px",
              background: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "25px"
          }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                padding: "18px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />

                <div style={{ flex: "1", minWidth: "150px" }}>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>
                    Item Total: ₹{item.price * item.quantity}
                  </p>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  <button
                    onClick={() =>
                      changeQuantity(item.id, item.quantity - 1)
                    }
                    aria-label={`Decrease ${item.name} quantity`}
                    style={quantityButtonStyle}
                  >
                    −
                  </button>

                  <span style={{ fontWeight: "bold" }}>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      changeQuantity(item.id, item.quantity + 1)
                    }
                    aria-label={`Increase ${item.name} quantity`}
                    style={quantityButtonStyle}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  style={{
                    padding: "10px 14px",
                    background: "#c62828",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "30px",
            padding: "25px",
            background: "#f1f8e9",
            borderRadius: "10px",
            textAlign: "right"
          }}>
            <h2>Total Amount: ₹{totalAmount}</h2>

            <button
              onClick={() => alert("Checkout Coming Soon!")}
              style={{
                marginTop: "15px",
                padding: "12px 22px",
                background: "#245c35",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Checkout
            </button>

            <button
              onClick={() => {
                window.location.href = "/plants";
              }}
              style={{
                marginTop: "15px",
                marginLeft: "10px",
                padding: "12px 22px",
                background: "#e0e0e0",
                color: "#222",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const quantityButtonStyle = {
  width: "35px",
  height: "35px",
  fontSize: "20px",
  background: "#e8f5e9",
  color: "#245c35",
  border: "1px solid #245c35",
  borderRadius: "5px",
  cursor: "pointer"
};

export default CartItem;
