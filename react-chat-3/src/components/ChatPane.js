import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  const { currentChannel, currentUser } = props;

  const [messageStateArray, setMessageStateArray] = useState(INITIAL_CHAT_LOG); 

  //STATE MANAGEMENT: how do we change?
  const addMessage = function(userObj, messageText, channel) {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray); //update state & re-render
  }

  const toggleLikeMessage = function(timestamp) {
    const updatedMessageArray = messageStateArray.map((msgObj) => {
      if(msgObj.timestamp === timestamp){
        const newMsgObj = {...msgObj, isLiked: !msgObj.isLiked}
        // msgObj.isLiked = true; //!msgObj.isLiked; //toggle
        return newMsgObj;
      } else {
        return msgObj;
      }
    })

    setMessageStateArray(updatedMessageArray);
  }


  //have an array of objects
  //want to count how many have `isLiked = true`

  // let numberLiked = 0;
  // for(const msgObj of messageStateArray ){
  //   if(msgObj.isLiked) {
  //     numberLiked++;
  //   }
  // }
  const numberLiked = messageStateArray.filter((msgObj) => {
    return msgObj.isLiked
  }).length;

  // const numberLiked = messageStateArray.reduce((currentCount, msgObj) => {
  //   if(msgObj.isLiked)
  //     return currentCount + 1;
  //   else
  //     return currentCount;
  // }, 0)



  //RENDERING: what do we look like?

  //data: an array of messages [{}, {}]
  const orderedMessageArray = messageStateArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  //filter for only channel stuff
  const channelMessages = orderedMessageArray.filter((msgObj) => {
    return msgObj.channel === props.currentChannel;
  })
    
  //DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem 
        messageData={chatObj} key={chatObj.timestamp} 
        likeFunction={toggleLikeMessage} />
      return elem; //put it in the new array!
  });

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageItemArray.length === 0 && 
            <p>No messages yet</p>
          }

          <p># liked messages: {numberLiked}</p>

          {messageItemArray}
        </div>

        <ComposeForm currentChannel={currentChannel} currentUser={currentUser} addMessageFunction={addMessage} />
    </>
  )
}

function MessageItem(props) {
  const {messageData, likeFunction} = props;
  const {userName, userImg, text, isLiked, timestamp} = messageData;

  // const [localLiked, setLocalLiked] = useState(isLiked);

  //EVENT HANDLING
  const handleClick = (event) => {
    console.log("you clicked on", text);
    likeFunction(timestamp)
    //setLocalLiked(!localLiked);
  };


  //WHAT DOES IT LOOK LIKE
  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red";
  }

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}