import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId); // stop
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date()); // setDate
    }, 1000);
    setTimerId(id);
    setShowTime(true);
  };

  const onMouseEnter = () => {
    if (showTime) {
      setShow(true); // show
    }
  };
  const onMouseLeave = () => {
    setShow(false); // close
  };

  const stringTime = date.toLocaleTimeString(); // fixed with date
  const stringDate = date.toLocaleDateString(); // fixed with date

  return (
    <div className={s.clock}>
      <div className={s.clockItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {showTime && stringTime}
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
