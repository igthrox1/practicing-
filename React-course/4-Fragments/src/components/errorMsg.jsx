function ErrorMsg(items) {

    return <>{items.length === 0 && <h3>Iam still hungry</h3>}</>;
}

export default  ErrorMsg;