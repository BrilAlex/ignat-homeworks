import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // any fixed
  addUserCallback: (userName: string) => void // any fixed
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // any fixed
  const [error, setError] = useState<string>('') // any fixed

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // any fixed
    setError("");
    setName(e.currentTarget.value); // fixed
  };
  const addUser = () => {
    const trimmedName = name.trim();
    if (trimmedName !== "") {
      addUserCallback(trimmedName);
      alert(`Hello ${trimmedName}!`);
    } else {
      setError("Name is required");
    }
    setName("");// fixed
  };

  const totalUsers = users.length; // fixed

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
