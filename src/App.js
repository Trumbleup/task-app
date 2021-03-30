import { useState } from "react";
import Overview from "./components/Overview";

function App() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
  }
  const handleTasks = () => {
    setAllTasks([...allTasks, task]);
    setTask("");
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={task}></input>
      <input type="submit" onClick={handleTasks}></input>
      <Overview allTasks={allTasks}/>
    </div>
  );
}

export default App;
