import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // any fixed
  deleteAffairCallback: (affair_ID: number) => void // any fixed
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }// fixed

  const nameStyles = `${styles.item} ${styles.name}`;
  const priorityStyles = `${styles.item} ${styles.priority} ${styles[props.affair.priority]}`;
  const deleteButtonStyles = `${styles.item} ${styles.button} ${styles.deleteButton}`;

  return (
    <div className={styles.affair}>
      <div className={nameStyles}>{props.affair.name}</div>
      <div className={priorityStyles}>{props.affair.priority}</div>

      <button className={deleteButtonStyles} onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
