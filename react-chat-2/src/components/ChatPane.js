import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  const { currentChannel } = props;

  const [clickCount, setClickCount] = useState(0) //arg is what to start as
  const [messageArray, setMessageArray] = useState(INITIAL_CHAT_LOG);

  console.log("rendering the ChatPane with count", clickCount);

  // const clickCount = stateResultArray[0];
  // const setClickCount = stateResultArray[1];

  const addMessage = (userId, userName, messageText, channel) => {
    const newMessage =   {
      "userId": userId,
      "userName": userName,
      "userImg": "/img/"+userId+".png",
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }

    const newMessageArray = [...messageArray, newMessage];
    // messageArray.push(newMessage); //modify the array
    setMessageArray(newMessageArray); //update the state
  }

  const handleClick = function(event) {
    console.log("You clicked me!");
    setClickCount(clickCount + 1);
    console.log("in handleclick", clickCount);
      //1. change the value in RAM
      //2. re-render the component

    addMessage("parrot", "Parrot", "Hello world", "general");

  }

  //data: an array of messages [{}, {}]
  const messageObjArray = messageArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  //filter for only channel stuff
  const channelMessageArray = messageObjArray.filter((chatObj) => {
    return chatObj.channel == currentChannel;
  })


  //DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessageArray.map((chatObj) => {
      const elem = <MessageItem key={chatObj.timestamp} messageData={chatObj} />
      return elem; //put it in the new array!
  });

  //what I look like if no messages
  // if(channelMessageArray.length === 0 ) {
  //   // return null;
  //   return (
  //     <p>No messages here</p>
  //   );
  // }

  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        {/* button.addEventListener('click', handleClick) */}
        <button 
          className="btn btn-success"
          onClick={handleClick} 
          >Click me!</button>
        <p>You clicked me {clickCount} times</p>


      </div>
      <hr/>

      {channelMessageArray.length == 0 && 
          <p>No Messages yet</p>
      }

      {/* Messages */}
      {messageItemArray}



      <ComposeForm howToAddMessage={addMessage} currentChannel={currentChannel} />
    </div>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
