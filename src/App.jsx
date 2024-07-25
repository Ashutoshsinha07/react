import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";

function App() {
  // State to hold the text entered by the user
  const [texttoshow, setTexttoshow] = useState("food item entered by user");

  // Hardcoded list of food items (for demonstration purposes)
  let fooditems = ["sabzi", "roti", "rice", "veggies", "corn", "salad"];

  // Function to handle onChange event from Foodinput component
  const handleOnInputChange = (event) => {
    setTexttoshow(event.target.value);
  };

  return (
    <Container>
      <div className="foodheading">Healthy food</div>
      <Foodinput handleonchange={handleOnInputChange} />
      <p>{texttoshow}</p>
      {fooditems.length === 0 ? <h3>I am still hungry</h3> : null}
      <Fooditems items={fooditems} />
    </Container>
  );
}

export default App;
