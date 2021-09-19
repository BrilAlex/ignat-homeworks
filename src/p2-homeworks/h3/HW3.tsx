import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import {AlternativeGreeting} from "./AlternativeGreeting";

// types
export type UserType = {
    _id: string // any fixed
    name: string // any fixed
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // any fixed

    const addUserCallback = (name: string) => { // any fixed
        setUsers([{_id: v1(), name: name}, ...users]) // fixed
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreeting users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
