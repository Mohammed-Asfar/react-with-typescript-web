import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

interface Task {
  id: number;
  title: string;
  isFinished: boolean;
}

function App() {
  let taskTitle: string = "";
  const [taskList, setTask] = useState<Task[]>([]);

  function handleOnClick() {
    if (taskTitle != "") {
      setTask([
        ...taskList,
        { id: taskList.length, title: taskTitle, isFinished: false },
      ]);
    }
  }

  function handleDelete(id: number) {
    const newTaskList = taskList.filter((task) => task.id != id);
    setTask(newTaskList);
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
              <h5>{task.title[0].toUpperCase()}</h5>
            </div>
            <p>{task.title}</p>
            <button className="deleteBtn" onClick={() => handleDelete(task.id)}>
              {" "}
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
