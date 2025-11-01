import styles from "./container.module.css"

function Container (props) {
    return <div className = {styles.Container}>{props.children}</div>
}

export default Container;