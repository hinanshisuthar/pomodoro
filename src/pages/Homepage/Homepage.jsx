import { Link } from "react-router-dom";
import { NewTask } from "../../components/NewTask";
import { TaskList } from "../../components/TaskList";
import { useData } from "../../context/data-context";
import "./homepage.css";

const Homepage = () => {
  const {
    tasklist,
  } = useData();

  return (
    <div className="wrapper-center grid vrt-30-70 p-2">
      <div className="top-box p-sm">
        <div className="flex-row-sb user-box">
          <h1 className="text-lgt p-sm">
            Welcome back, <span className="highlight">User</span> !
          </h1>
          <Link to="/login">
            <button className="btn btn-primary br-8">My Account</button>
          </Link>
        </div>
        <h4 className="text-lgt p-sm">Login to see, your tasks !</h4>
      </div>
      <div className="btm-box br-10">
        <NewTask />
        <div className="task-container p-md">
          <TaskList tasklist={tasklist} />
        </div>
      </div>
    </div>
  );
};

export { Homepage };
