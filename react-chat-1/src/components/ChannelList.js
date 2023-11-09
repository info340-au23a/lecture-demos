import React from 'react';

export function ChannelList(props) {

  const CHANNEL_LIST = [
    "channel-1", "channel-2", "birds", "dank-memes", "random"
  ]


  //[<li>, <li>, </li>]
  const liArray = CHANNEL_LIST.map((channelNameString) => {
    const tranformed = (
      <li key={channelNameString}>
        <a className="text-white" href={"/"+channelNameString}>{channelNameString}</a>
      </li>
    )
    return tranformed;
  })



  return (
    <nav className="bg-secondary">
      <ul>
        {liArray}
      </ul>
    </nav>
  )
}