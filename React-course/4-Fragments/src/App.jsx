import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems.jsx";
import ErrorMsg from "./components/errorMsg.jsx";
import Container from "./components/container.jsx"
import FoodInput from "./components/foodInput.jsx"
import { useState } from "react";

function App() {
  let [foodItems , setFoodItems]=useState(["dal","Green Vegetable", "Roti"]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container >
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMsg items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>

      <Container>
        <p>
          the foods mentioned above are good or bad for ur health we dont know
          that okay
        </p>
      </Container>
    </>
  );
}

export default App
