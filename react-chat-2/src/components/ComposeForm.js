import React from 'react';

export function ComposeForm(props) {

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message"></textarea>
        <button className="btn btn-secondary" type="button">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}