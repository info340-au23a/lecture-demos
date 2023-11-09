import React from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';

function App(props) {
  return (
    <div className="container-fluid">
      <HeaderBar />
      <div className="row">
        <div className="col-3">
          <ChannelList />
        </div>
        <div className="col-9">
          <ChatPane />
        </div>
      </div>
      {/*
      <UserList >
        
      </UserList> */}
    </div>
  );
}

export default App;