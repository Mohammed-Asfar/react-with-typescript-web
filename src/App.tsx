import "./App.css";
import InputField from "./components/InputField";

function App() {
  let taskList = [
    { title: "I want to learn Python", isFinished: false },
    { title: "I want to learn react", isFinished: false },
  ];

  return (
    <>
      <h1 className="heading">Taskify</h1>
      <InputField></InputField>
      <ul className="column">
        {taskList.map((task) => (
          <div className="taskCard">{task.title}</div>
        ))}
      </ul>
    </>
  );
}

export default App;
