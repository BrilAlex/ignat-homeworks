import React from 'react'
import Message from "./Message";
import {AlternativeMessage} from "./AlternativeMessage";

const messageData = {
    avatar: 'https://pbs.twimg.com/media/BwnUwfNIYAAvp-F.jpg',
    name: 'Джоэл',
    message: 'Типизировал state для соц. сети?',
    time: '18:05'
}

const replyData = {
    avatar: 'https://pbs.twimg.com/media/EYqbdt0XkAANziO.jpg',
    name: 'Шепард',
    message: 'Еще нет, в процессе. Как раз занимаюсь этим вопросом.',
    time: '18:33'
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                senderAvatar={replyData.avatar}
                senderName={replyData.name}
                messageText={replyData.message}
                dispatchTime={replyData.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
