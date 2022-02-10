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

  return (
    <div className={styles.affair}>
      <div className={styles.affairName}>{props.affair.name}</div>
      <div className={styles.affairPriority}>{props.affair.priority}</div>

      <button className={styles.deleteAffairButton} onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
