let CurrentTime = () => {
  
  let Time = new Date()
  
  return (
    <p className="Lead">
      This is the current time:{Time.toLocaleDateString()} -{" "}
      {Time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
