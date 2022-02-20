import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // any fixed
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // any fixed
  addUser: () => void // any fixed
  error: string // any fixed
  totalUsers: number // any fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? `${s.nameInput} ${s.error}` : s.nameInput; // fixed with (?:)

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addUser();
  };

  return (
    <div className={s.greetingContainer}>
      <input
        value={name}
        onChange={setNameCallback}
        onKeyPress={onKeyPressHandler}
        className={inputClass}
      />
      <span className={s.errorMessage}>{error}</span>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
