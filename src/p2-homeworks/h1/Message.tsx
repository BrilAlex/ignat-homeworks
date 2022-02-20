import React from 'react';
import styles from "./Message.module.css";

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={styles.message}>
      <img className={styles.avatar} src={props.avatar} alt={props.name + " avatar"}/>

      <div className={styles.angle}/>

      <div className={styles.content}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.text}>{props.message}</p>
        <p className={styles.time}>{props.time}</p>
      </div>
    </div>
  )
}

export default Message
