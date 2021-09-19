import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // any fixed
    addUserCallback: (nameValue: string) => void // any fixed
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // any fixed
    const [error, setError] = useState<boolean>(false) // any fixed

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // any fixed
        setName(e.currentTarget.value);
        setError(false);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            if (name.trim() !== "") {
                addUserCallback(name);
                alert(`Hello  ${name}!`);
                setName("");
            } else setError(true);
        }
    }
    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name);
            alert(`Hello  ${name}!`);
            setName("");
        } else setError(true); // fixed
    }

    const totalUsers = users.length // fixed

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressCallback={onKeyPressCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
