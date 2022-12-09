import { Link } from "react-router-dom";
import { useData } from "../../context/data-context";
import { VscAccount } from "../icons";
import { Timer } from "../timer/Timer";

const Pomodoro = () => {
  
  const {focusDuration} = useData();
  const time = new Date();
  time.setSeconds(time.getSeconds() + (60*focusDuration));

  return (
    <div>
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
          <Timer expiryTimestamp={time} />
        </div>
      </div>
    </div>
  );
};

export { Pomodoro };
