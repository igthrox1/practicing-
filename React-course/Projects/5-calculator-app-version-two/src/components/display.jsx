import styles from "./display.module.css"

function Display({ DisplayVal }) {
  return <input type="text" className={styles.display} value={DisplayVal} readOnly/>;
}

export default Display;