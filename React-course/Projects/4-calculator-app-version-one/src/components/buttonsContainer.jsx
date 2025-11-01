import styles from "./buttonsContainer.module.css";

function ButtonsContainer () {
    
    let buttonsName = ["c", " 1", "2 ", "+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    
    return (
      <div className={styles.buttonsContainer}>
        {buttonsName.map((buttonName) => (
          <button className={styles.button}>{buttonName}</button>
        ))}
        
      </div>
    );
}

export default ButtonsContainer;