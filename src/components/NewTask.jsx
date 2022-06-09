import { useData } from "../context/data-context";
import "../pages/Homepage/homepage.css";
import { useParams } from "react-router-dom";

const NewTask = () => {
  const { taskInputs, setTaskInputs, createTask, editTask, isEditing, setIsEditing } =
    useData();
  const { taskId } = useParams();

  const taskHandler = (e) => {
    if (e.key === "Enter") {
      if (isEditing) {
        editTask(taskId);
        setTaskInputs({
          title: "",
        });
        setIsEditing(false);
      } else {
        createTask();
      }
    }
  };

  return (
    <div className="task-div flex-row-center">
      <h3 className="text-bold mr-2 pr-2">To - Do List</h3>
      <input
        type="text"
        placeholder="Press enter for new task"
        className="input-task p-sm"
        value={taskInputs.title}
        onChange={(e) =>
          setTaskInputs({ ...taskInputs, title: e.target.value })
        }
        onKeyUp={(e) => taskHandler(e)}
      />
    </div>
  );
};

export { NewTask };
