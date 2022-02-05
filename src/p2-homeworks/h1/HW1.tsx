import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
  avatar: "https://pbs.twimg.com/media/BwnUwfNIYAAvp-F.jpg",
  name: 'Joel',
  message: 'How it is going in the future?',
  time: '12:03',
}

const responseData = {
  avatar: "https://pbs.twimg.com/media/EYqbdt0XkAANziO.jpg",
  name: 'Commander Shepard',
  message: 'Really cool! Fighting giant aliens, saving whole galaxy.',
  time: '12:54',
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
      <AlternativeMessage messageData={responseData}/>
      <hr/>
    </div>
  )
}

export default HW1
