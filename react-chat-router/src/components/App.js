import React, {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import { HeaderBar } from './HeaderBar.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

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

  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={<Static.WelcomePage />} />
        <Route path="/chat/:channel?" element={
          <ChatPage 
            currentUser={currentUser} 
            messageArray={messageStateArray}
            addMessageFunction={addMessage}
            />
        } />
        <Route path="/signin" element={ 
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />
        } />
        <Route path="/about" element={<Static.AboutPage />} />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>

      {/* <Static.WelcomePage />
      <Static.AboutPage />
      <Static.ErrorPage /> */}

    </div>
  );
}



export default App;