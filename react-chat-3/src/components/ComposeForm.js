import React, { useState } from 'react';

export function ComposeForm(props) {
  const { addMessageFunction, currentChannel } = props;

  const [inputtedText, setInputtedText] = useState('');

  //typing
  const handleChange = (event) => {
    const typedValue = event.target.value;
    setInputtedText(typedValue);
  }

  //submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }

    addMessageFunction(userObj, inputtedText, currentChannel);   
    setInputtedText('');
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={inputtedText}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}