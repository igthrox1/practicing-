import "./App.css"
import ClockHeading from "./componenets/clockHeading";
import ClockSlogan from "./componenets/clockSlogan";
import CurrentTime from "./componenets/currentTime";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  ); 
}

export default App;