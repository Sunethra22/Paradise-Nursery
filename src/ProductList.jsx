import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b30?w=400" },
      { id: 2, name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { id: 3, name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 5, name: "Rubber Plant", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 6, name: "Boston Fern", price: 279, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 8, name: "Echeveria", price: 179, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 9, name: "Jade Plant", price: 229, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 10, name: "Haworthia", price: 189, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 11, name: "Echeveria Elegans", price: 249, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 12, name: "Burro's Tail", price: 259, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" }
    ]
  },
  {
    category: "Flowering Plants",
    plants: [
      { id: 13, name: "Anthurium", price: 399, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 14, name: "African Violet", price: 279, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 15, name: "Orchid", price: 599, image: "https://images.unsplash.com/photo-1566920154275-4e7e6e6c5b21?w=400" },
      { id: 16, name: "Kalanchoe", price: 249, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 17, name: "Bromeliad", price: 449, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 18, name: "Begonia", price: 329, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#245c35",
        color: "white",
        padding: "15px 25px",
        borderRadius: "8px",
        marginBottom: "25px"
      }}>
        <h2>Paradise Nursery</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "white" }}>Home</a>
          <a href="/plants" style={{ color: "white" }}>Plants</a>
          <a href="/cart" style={{ color: "white" }}>
            🛒 Cart ({totalItems})
          </a>
        </div>
      </nav>

      <h1 style={{ textAlign: "center", color: "#245c35" }}>
        Our Houseplants
      </h1>
      <p style={{ textAlign: "center" }}>
        Bring a little nature into your home!
      </p>

      {plantCategories.map((group) => (
        <section key={group.category} style={{ margin: "35px 0" }}>
          <h2 style={{
            color: "#245c35",
            borderBottom: "2px solid #b7d7a8",
            paddingBottom: "10px"
          }}>
            {group.category}
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}>
            {group.plants.map((plant) => {
              const isAdded = cartItems.some(
                (item) => item.id === plant.id
              );

              return (
                <article key={plant.id} style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  <h3 style={{ margin: "12px 0" }}>{plant.name}</h3>
                  <p>₹{plant.price}</p>

                  <button
                    disabled={isAdded}
                    onClick={() => dispatch(addItem(plant))}
                    style={{
                      marginTop: "12px",
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      background: isAdded ? "#999" : "#2e7d32",
                      color: "white",
                      cursor: isAdded ? "not-allowed" : "pointer"
                    }}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
