import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All')

  // function onDarkModeClick() {
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }

  function handleDarkMode (){
    setIsDarkMode((prevMode) => !prevMode)
  }

  function handleCategory(event){
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkMode}/>
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategory}/>
      <ShoppingList items={itemData} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
