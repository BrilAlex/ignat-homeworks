import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearTimeout(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date());
        }, 1000)
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true);
    }
    const onMouseLeave = () => {
        // close
        setShow(false);
    }

    const stringTime = date?.toLocaleTimeString(); // fixed with date
    const stringDate = date?.toLocaleDateString(); // fixed with date

    return (
        <div className={styles.wrapper}>
            <div className={styles.timeBlock}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>


            <div className={styles.dateBlock}>
                {show && stringDate}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
