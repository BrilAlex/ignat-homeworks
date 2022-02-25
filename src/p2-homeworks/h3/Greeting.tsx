import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // any fixed
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // any fixed
  onEnterKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void
  addUser: () => void // any fixed
  error: string // any fixed
  totalUsers: number // any fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, onEnterKeyPress, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = error ? `${s.nameInput} ${s.error}` : s.nameInput; // fixed with (?:)

  return (
    <div className={s.greetingContainer}>
      <div>
        <input
          value={name}
          onChange={setNameCallback}
          onKeyPress={onEnterKeyPress}
          onBlur={setNameCallback}
          className={inputClass}
        />
        <span className={s.errorMessage}>{error}</span>
      </div>
      <button onClick={addUser} className={s.addButton} disabled={!name}>Add</button>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
