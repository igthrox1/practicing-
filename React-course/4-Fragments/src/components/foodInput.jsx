import styles from "./foodInput.module.css"

function FoodInput({ handleKeyDown }) {
  return (
    <div className={styles.hi}>
      <input
        type="text"
        placeholder="enter your food"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default FoodInput;