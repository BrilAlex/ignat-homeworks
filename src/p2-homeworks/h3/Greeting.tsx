import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // any fixed
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // any fixed
    onKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // any fixed
    error: boolean // any fixed
    totalUsers: number // any fixed
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? `${s.userNameInput} ${s.error}` : s.userNameInput; // fixed with (?:)

    return (
        <div className={s.greetingWrap}>
            <div>
                <input value={name} onChange={setNameCallback}
                       onKeyPress={onKeyPressCallback} className={inputClass}/>
                <button className={s.addUserButton} onClick={addUser}>add</button>
                <span className={s.usersCount}>{totalUsers}</span>
            </div>
            {error && <span className={s.errorSpan}>User name is required</span>}
        </div>
    )
}

export default Greeting
