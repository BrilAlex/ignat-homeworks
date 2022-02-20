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
    <div className={`${styles.message} ${styles.response}`}>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>{message}</p>
        <p className={styles.time}>{time}</p>
      </div>

      <div className={styles.angle}/>

      <img className={styles.avatar} src={avatar} alt={name}/>
    </div>
  )
}

export default AlternativeMessage
