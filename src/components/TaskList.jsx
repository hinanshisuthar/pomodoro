import "../pages/Homepage/homepage.css";
import { TaskCard } from "./TaskCard";

const TaskList = ({ tasklist }) => {
  return (
    <div>
      {tasklist.length === 0 ? (
        <p className="text-center">
          No tasks added for today. Make your to-do now !
        </p>
      ) : (
        tasklist.map((task) => <TaskCard task={task} key={task.id} />)
      )}
    </div>
  );
};

export { TaskList };
