import "../pages/Homepage/homepage.css";
import { BsFillTrashFill, BsPencilSquare } from "../components/icons";
import { useData } from "../context/data-context";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { taskInputs, setTaskInputs, deleteTask, setIsEditing } = useData();

  const editTaskHandler = (task) => {
    setTaskInputs({ ...taskInputs, title: task.title });
    setIsEditing(true);
  };

  return (
    <div className="flex-row-sb p-1 task-card br-10 my-sm" key={task.id}>
      <input type="checkbox" name="task" />
      <label>
        <h4 className="task-name p-sm">{task.title}</h4>
      </label>
      <div className="ml-auto">
        <Link to={`/tasks/${task.id}`}>
          <BsPencilSquare
            size={22}
            className="icon mx-sm"
            onClick={() => editTaskHandler(task)}
          />
        </Link>
        <BsFillTrashFill
          size={22}
          className="icon mx-sm"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export { TaskCard };
