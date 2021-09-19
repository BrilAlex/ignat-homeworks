import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // any fixed
    deleteAffairCallback: (aId: number) => void // any fixed
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// fixed

    return (
        <div className={styles.affairWrap}>
            <span className={styles.affairTitle}>{props.affair.name}</span>
            <span className={styles.affairPriority}>{props.affair.priority}</span>{/* shows affair title and priority */}

            <button className={styles.deleteAffairButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
