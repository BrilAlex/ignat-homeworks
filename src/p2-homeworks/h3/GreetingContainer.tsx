import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[] // any fixed
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
    const trimmedName = e.currentTarget.value.trim();
    if (trimmedName !== "") {
      setName(trimmedName);
      error && setError("");
    } else {
      name && setName("");
      setError("Name is required");
    } // fixed
  };
  const addUser = () => {
    addUserCallback(name);
    alert(`Hello ${name}!`);
    setName(""); // fixed
  };
  const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && name) {
      addUser();
    } else {
      setError("Name is required");
    }
  };

  const totalUsers = users.length; // fixed

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      onEnterKeyPress={onEnterKeyPress}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
