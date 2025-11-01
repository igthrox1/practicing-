import styles from "./App.module.css";
import Display from "./components/display.jsx";
import ButtonsContainer from "./components/buttonsContainer.jsx";
import { useState } from "react";

function App() {
  let [calVal , setCalVal] = useState("");
  const onButtonClick = (buttonName) =>  {
    if (buttonName === "c") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonName;
      setCalVal(newDisplayVal);
    }
  };


  return (
    <div className={styles.calculator}>
      <Display DisplayVal = {calVal} />
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  );

  
}

export default App;
