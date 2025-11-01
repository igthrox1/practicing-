import styles from "./buttonsContainer.module.css";

function ButtonsContainer({ onButtonClick }) {
  let buttonsName = [
    "c",
    " 1",
    "2 ",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonName) => (
        <button className={styles.button} key={buttonName} onClick={()=>onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;