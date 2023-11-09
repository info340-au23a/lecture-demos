import React, { useState } from 'react';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props){
  console.log("rendering the ChatPane");
  //[{},{}, {}]
  // console.log(INITIAL_CHAT_LOG);

  const stateResult = useState(340); //arg is initial value
  const numberTimesClicked = stateResult[0]; //first item is the current state value
  const setNumberTimeClicked = stateResult[1];
  console.log(numberTimesClicked);

  const handleClick = (event) => {
    console.log("clicky clicky");
    setNumberTimeClicked(numberTimesClicked +1);
      //1. changes the value of the state (in memory)
      //2. re-renders the component
  }


  //[<MessageItem>]
  const messageItemArray = INITIAL_CHAT_LOG.map((messageObj) => {
    const transformed = (
      <MessageItem key={messageObj.timestamp} messageData={messageObj} />
    )
    return transformed;
  });

  return (
    <div>
      <div className="mb-3">
        {/* button.addEventListern(click, callback) */}
        <button 
          className="btn btn-success"
          onClick={handleClick}
        >Add Message</button>
        {numberTimesClicked}
      </div>
      {messageItemArray}
      {/* <ComposeForm /> */}
    </div>
  )
}

function MessageItem(props){
  //console.log(props);
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}