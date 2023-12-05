import React from 'react';

export function WelcomePage(props) {
  return (
    <div className="card bg-light">
      <div className="container card-body">
        <h2>Welcome to React Chat!</h2>
        <p>The latest and greatest messaging app</p>
        <p><a href="/signin">Sign in to get started!</a></p>
      </div>
    </div>
  );
}

export function AboutPage(props) {
  return (
    <div className="card bg-warning bg-gradient">
      <div className="container card-body">
        <h2>About React Chat</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus facere repellat accusamus dicta, sit quasi ipsa, fugit ipsum tempore rerum repellendus ullam doloremque quod porro laborum et recusandae cupiditate?</p>
      </div>
    </div>
  );
}

export function ErrorPage(props) {
  return <p className="alert alert-danger">Page not found</p>;
}