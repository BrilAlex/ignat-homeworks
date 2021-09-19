import React from 'react';
import s from "./Message.module.css";

type MessageProps = {
    senderAvatar: string,
    senderName: string,
    messageText: string,
    dispatchTime: string
}

export const AlternativeMessage = (props: MessageProps)  => {
    return (
        <div>
            <div className={s.reply_wrap}>
                <div className={s.message_avatar}>
                    <img src={props.senderAvatar} alt={"Avatar"}/></div>
                <div className={s.reply}>
                    <p className={s.message_sender}>{props.senderName}</p>
                    <p className={s.message_text}>{props.messageText}</p>
                    <p className={s.message_time}>{props.dispatchTime}</p>
                </div>
            </div>
        </div>
    );
}