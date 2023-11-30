import React from 'react';

import { Link } from 'react-router-dom';


export function ChannelList(props) {
  const {channelNames, channelCounts} = props;

  //render the links
  const liArray = channelNames.map((channelNameString) => {
    const count = channelCounts[channelNameString] || 0;
    return (
      <div key={channelNameString}>
        <Link className="px-2"
          name={channelNameString}
          to={"/chat/"+channelNameString}
        >
            {channelNameString} ({count})
        </Link>
      </div>
    );
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      {liArray}
    </nav>
  )
}