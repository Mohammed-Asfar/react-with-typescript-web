import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

interface Task {
  title: string;
  isFinished: boolean;
}

function App() {
  let taskTitle: string = "";
  const [taskList, setTask] = useState<Task[]>([]);

  function handleOnClick() {
    setTask([...taskList, { title: taskTitle, isFinished: false }]);
  }

  function handleOnChange(value: string) {
    taskTitle = value;
  }

  return (
    <>
      <h1 className="heading">Taskify</h1>
      <InputField
        props={{ onChange: handleOnChange, onClick: handleOnClick }}
      ></InputField>
      <div className="column">
        {taskList.map((task) => (
          <div className="taskCard">
            <div className="avatar">
              <h5>{task.title[0]}</h5>
            </div>
            <p>{task.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
