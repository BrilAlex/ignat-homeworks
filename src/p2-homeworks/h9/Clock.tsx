import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId); // stop
  };
  const start = () => {
    stop();
    const id: number = +setInterval(() => {
      setDate(new Date()); // setDate
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true); // show
  };
  const onMouseLeave = () => {
    setShow(false); // close
  };

  const stringTime = date?.toLocaleTimeString() || <br/>; // fixed with date
  const stringDate = date?.toLocaleDateString() || <br/>; // fixed with date

  return (
    <div className={s.clock}>
      <div className={s.clockItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {stringTime}
      </div>

      <div className={s.clockItem}>
        {show && stringDate}
      </div>

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>

    </div>
  );
}

export default Clock;
