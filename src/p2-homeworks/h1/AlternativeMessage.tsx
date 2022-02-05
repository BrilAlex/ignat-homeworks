import React from 'react';
import styles from "./Message.module.css";

type MessagePropsType = {
  messageData: {
    avatar: string
    name: string
    message: string
    time: string
  }
};

function AlternativeMessage(props: MessagePropsType) {
  const {avatar, name, message, time} = props.messageData;

  return (
    <div className={styles.response}>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.messageText}>{message}</p>
        <span className={styles.messageTime}>{time}</span>
      </div>
      <img className={styles.avatar} src={avatar} alt={name}/>
    </div>
  )
}

export default AlternativeMessage
