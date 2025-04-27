import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Determine the CSS class based on the state
  const appClass = darkMode ? "App dark" : "App light";

  // Event handler to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;