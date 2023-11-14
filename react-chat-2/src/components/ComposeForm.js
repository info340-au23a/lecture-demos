import React, { useState } from 'react';

export function ComposeForm(props) {

  const { howToAddMessage, currentChannel } = props;

  const [typedValue, setTypedValue] = useState('');

  //document.querySelector(input);
  //input.value //<= user input

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setTypedValue(inputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit form with", typedValue);

    howToAddMessage("parrot", "Parrot", typedValue, currentChannel)

  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={typedValue}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-secondary" type="submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}