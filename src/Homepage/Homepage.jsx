import {
  AiFillPlusCircle,
  BsFillTrashFill,
  BsPencilSquare,
} from "../components/icons";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="wrapper-center grid vrt-30-70 p-2">
      <div className="top-box p-sm">
        <div className="flex-row-sb user-box">
          <h1 className="text-lgt p-sm">
            Welcome back, <span className="highlight">User</span> !
          </h1>
          <button className="btn btn-primary br-8">Login</button>
        </div>
        <h4 className="text-lgt p-sm">
          Login to see, your tasks !
        </h4>
      </div>
      <div className="btm-box br-10">
        <div className="task-div flex-row-sb">
          <h3 className="text-bold">To - Do List</h3>
          <AiFillPlusCircle size={30} className="icon" />
        </div>
        <div className="task-container p-md">
          <div>
            <div className="flex-row-sb p-sm">
              <input type="checkbox" name="task" />
              <label>
                <h4 className="task-name p-sm">Task 1</h4>
              </label>
              <div className="ml-auto">
                <BsPencilSquare size={22} className="icon mx-sm" />
                <BsFillTrashFill size={22} className="icon mx-sm" />
              </div>
            </div>
            <div className="flex-row-sb p-sm">
              <input type="checkbox" name="task" />
              <label>
                <h4 className="task-name p-sm">Task 2</h4>
              </label>
              <div className="ml-auto">
                <BsPencilSquare size={22} className="icon mx-sm" />
                <BsFillTrashFill size={22} className="icon mx-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Homepage };
