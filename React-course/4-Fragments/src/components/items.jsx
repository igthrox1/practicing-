import styles from "./items.module.css"

function Items({ items, bought, handleBuyButton, activeItems }) {
  let btn = ""
  bought ? btn="remove" : btn = "buy"

  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{items}</span>
      <button onClick={handleBuyButton}>{btn}</button>
    </li>
  );
}

export default Items;