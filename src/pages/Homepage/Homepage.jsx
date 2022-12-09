import { Link } from "react-router-dom";
import { NewTask } from "../../components/NewTask";
import { TaskList } from "../../components/TaskList";
import { useData } from "../../context/data-context";
import "./homepage.css";
import { VscAccount } from "../../components/icons";

const Homepage = () => {
  const { tasklist } = useData();

  return (
    <div className="wrapper-center grid vrt-30-70 p-2">
      <div className="top-box pb-sm">
        <div className="flex-col-sb-start px-md">
          <div className="flex-row-sb user-box w-100">
            <h1 className="text-lgt pb-sm">
              Welcome back, <span className="highlight">User</span> !
            </h1>
            <Link to="/login">
              <button className="acc-btn">
                <VscAccount size={30} className="icon-user" />
              </button>
            </Link>
          </div>
          <h4 className="text-lgt p-sm">Login to see, your tasks !</h4>
          <div className="p-sm">
            <div className="flex-row-center btn-box">
              <Link to="/">
                <button className="btn btn-primary-main text-regular">
                  Tasks
                </button>
              </Link>
              <Link to="/pomodoro">
                <button className="btn text-regular">Pomodoro</button>
              </Link>
            </div>
          </div>
        </div>
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
