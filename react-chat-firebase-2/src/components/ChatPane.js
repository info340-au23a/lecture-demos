import React, {useState} from 'react';

import { getDatabase, ref, set as firebaseSet } from 'firebase/database'

import { ComposeForm } from './ComposeForm';

export function ChatPane(props) {
  const { messageArray, addMessageFunction, currentUser, currentChannel } = props;

  //what we look like
  const messagesToShow = messageArray
    .filter((messageObj) => {
      return messageObj.channel === currentChannel; //keep
    })
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

    const messageElemArray = messagesToShow.map((messageObj) => {
      const messageElem = (
        <MessageItem messageData={messageObj} key={messageObj.timestamp} />
      );
      return messageElem; //put it in the new array!
    });

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageArray.length === 0 && 
            <p>No messages found</p>
          }

          {messageElemArray}
        </div>

        <ComposeForm 
          currentUser={currentUser}
          currentChannel={currentChannel} 
          addMessageFunction={addMessageFunction} />
    </>
  )
}

function MessageItem(props) {
  const messageData = props.messageData;
  const {userName, userImg, text, isLiked} = messageData;

  const handleClick = (event) => {
    const db = getDatabase();
    const messageLikedRef = ref(db, "allMessages/"+props.messageObj.firebaseKey+"/isLiked"); //global liking
    firebaseSet(messageLikedRef, !isLiked);
  }

  //decide what it looks like
  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red"; //filled in
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
