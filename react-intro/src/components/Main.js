import React from 'react';

export function MainContent(props) {
  const textStr = "lorem ipsum etc etc";

  const imgUrl = "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHx8fDA%3D"
  

  return (
    <main>
      {/* a comment */}
      <p>{textStr + "!!"}</p>
      <ul>
        <li>Lions</li>
        <li>Tigers</li>
        <li>Huskies</li>
      </ul>
      <img src={imgUrl} alt="a puppy" />
    </main>
  )
}
