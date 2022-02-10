import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // any fixed
  data: Array<AffairType>
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

  return (
    <div>

      {mappedAffairs}

      <button onClick={setAll}>All</button>
      <button onClick={setHigh}>High</button>
      <button onClick={setMiddle}>Middle</button>
      <button onClick={setLow}>Low</button>
    </div>
  )
}

export default Affairs
