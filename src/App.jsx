import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>

      <p>
        Welcome to Paradise Nursery! Discover beautiful houseplants
        and bring nature into your home. Find the perfect green
        companion for your living space.
      </p>

      <button
        className="get-started-button"
        onClick={() => {
          window.location.href = "#plants";
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
