import React, { useState } from 'react';

export function ComposeForm(props) {
  const { addMessageFunction, currentChannel, currentUser } = props;

  const [typedValue, setTypedValue] = useState('');
  
  const handleClick = (event) => {
    console.log("posting text", typedValue);
    setTypedValue(''); //clear the input
    //add to the message list

    addMessageFunction(currentUser, typedValue, currentChannel);
  }

  const handleChange = (event) => {
    const whatUserTyped = event.target.value;
    setTypedValue(whatUserTyped);
  }

  return (
    <form className="compose-form my-2">
      <div className="input-group">
        <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
        <textarea 
          onChange={handleChange}
          value={typedValue}
          className="form-control" rows="2" placeholder="Type a new message"></textarea>
        <button onClick={handleClick} className="btn btn-secondary" type="button">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}