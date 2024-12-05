import "./App.css";
import Greet from "./Greet.js";
import { Welcome } from "./welcome";
import Counter from "./Counter";
import ParentComponent from "./Components/ParentComponent";
import NameList from "./Components/NameList";

function App() {
  return (
    <div className="App">
      {/* <Greet name="varun" role="full-stack-developer" />
      <Welcome name="varun" role="software-developer" />
      <Counter /> */}
      {/* <ParentComponent /> */}
      <NameList />
    </div>
  );
}

export default App;
