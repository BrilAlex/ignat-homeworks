import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css";

export type UserType = {
  _id: number
  name: string
  age: number
};

const initialPeople: UserType[] = [
  {_id: 0, name: "Кот", age: 3},
  {_id: 1, name: "Александр", age: 66},
  {_id: 2, name: "Коля", age: 16},
  {_id: 3, name: "Виктор", age: 44},
  {_id: 4, name: "Дмитрий", age: 40},
  {_id: 5, name: "Ирина", age: 55},
];

function HW8() {
  const [people, setPeople] = useState<UserType[]>(initialPeople); // any fixed

  // any fixed
  const finalPeople = people.map((p: UserType) => (
    <div key={p._id} className={s.row}>
      <p className={s.item}>{p.name}</p>
      <p className={s.item}>{p.age}</p>
    </div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}));
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}));
  const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

  return (
    <div>
      <hr/>
      homeworks 8

      {/*should work (должно работать)*/}
      {finalPeople}

      <div>
        <SuperButton onClick={sortUp}>sort up</SuperButton>
        <SuperButton onClick={sortDown}>sort down</SuperButton>
        <SuperButton onClick={check18}>check 18</SuperButton>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr/>
    </div>
  )
}

export default HW8
