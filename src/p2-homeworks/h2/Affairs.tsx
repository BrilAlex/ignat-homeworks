import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from "./Affairs.module.css";

type AffairsPropsType = { // any fixed
  data: Array<AffairType>
  filter: FilterType
  setFilter: (filterValue: FilterType) => void
  deleteAffairCallback: (affair_ID: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {props.setFilter("all")}; // fixed
  const setHigh = () => {props.setFilter("high")};
  const setMiddle = () => {props.setFilter("middle")};
  const setLow = () => {props.setFilter("low")};

  const getFilterStyles = (filter: FilterType) => {
    return props.filter === filter ?
      `${styles.button} ${styles.filterButton} ${styles.active}` :
      `${styles.button} ${styles.filterButton}`;
  }

  return (
    <div>

      {mappedAffairs}

      <button onClick={setAll} className={getFilterStyles("all")}>All</button>
      <button onClick={setHigh} className={getFilterStyles("high")}>High</button>
      <button onClick={setMiddle} className={getFilterStyles("middle")}>Middle</button>
      <button onClick={setLow} className={getFilterStyles("low")}>Low</button>
    </div>
  )
}

export default Affairs
