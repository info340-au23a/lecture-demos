import React, {useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';
import * as Static from './StaticPages.js';

const DEFAULT_USERS = [
  {userId: null, userName: null, userImg: '/img/null.png'}, //null user
  {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
  {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
  {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},  
]


function App(props) {
  const channelNames = ["general", "channel-2", "birds", "dank-memes", "random"];

  const [currentChannel, setCurrentChannel] = useState("general");

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]);

  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  const changeUser = (userObj) => {
    setCurrentUser(userObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} changeUserFunction={changeUser} />
      {/* ChatPage */}
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList 
            channelNames={channelNames} 
            currentChannel={currentChannel} 
            changeChannelCallback={changeChannel}
            />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} currentUser={currentUser} />
        </div>
      </div>
      {/* <Static.WelcomePage />
      <Static.AboutPage /> */}
    </div>
  );
}

export default App;