import Items from "./items.jsx";
import { useState } from "react";


function FoodItems({items}) {
    let [activeItems , setActiveItems] = useState([]);
    
    let onBuyButton = (item ,event) => {
      if (activeItems.includes(item)){
         let newItems = activeItems.filter((activeItem) => activeItem !== item);
         setActiveItems(newItems);
      }else{
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
      }
      
    }
    
    return (
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            bought={activeItems.includes(item)}
            items={item}
            handleBuyButton={(event) => {onBuyButton(item, event);}}
          />
        ))}
      </ul>
    );
}

export default FoodItems;