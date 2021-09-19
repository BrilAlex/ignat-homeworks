import React from 'react';
import styles from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.message_wrap}>
            <div className={styles.message_avatar}>
                <img src={props.avatar} alt={"Avatar"}/></div>
            <div className={styles.message}>
                <p className={styles.message_sender}>{props.name}</p>
                <p className={styles.message_text}>{props.message}</p>
                <p className={styles.message_time}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message
