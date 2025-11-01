import styles from "./App.module.css";
import Display from "./components/display.jsx";
import ButtonsContainer from "./components/buttonsContainer.jsx";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );

  
}

export default App;
