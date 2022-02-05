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
      <img className={styles.avatar} src={props.avatar} alt={props.name}/>
      <div className={styles.content}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.messageText}>{props.message}</p>
        <span className={styles.messageTime}>{props.time}</span>
      </div>
    </div>
  )
}

export default Message
