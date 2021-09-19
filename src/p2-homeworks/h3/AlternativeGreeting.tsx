import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // any fixed
    addUserCallback: (nameValue: string) => void // any fixed
}

export function AlternativeGreeting({users, addUserCallback}: GreetingContainerPropsType) {
    const [userName, setUserName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
        setError(false);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            if (userName.trim() !== "") {
                addUserCallback(userName.trim()); // Fixed adding spaces before and after name
                alert(`Hello  ${userName.trim()}!`);  // Fixed adding spaces before and after name
                setUserName("");
            } else setError(true);
        }
    }
    const addUser = () => {
        if (userName.trim() !== "") {
            addUserCallback(userName.trim()); // Fixed adding spaces before and after name
            alert(`Hello  ${userName.trim()}!`); // Fixed adding spaces before and after name
            setUserName("");
        } else setError(true);
    }

    const totalUsers = users.length
    return (
        <div>
            <Greeting
                name={userName}
                setNameCallback={setNameCallback}
                onKeyPressCallback={onKeyPressCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    );
}
