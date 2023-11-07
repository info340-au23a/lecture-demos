import React from 'react';

export function PageHeader(props) {

  return (
    <header className="container text-light p-4">
      <h1>Joel Ross</h1>
      <p>University of Washington iSchool</p>
      <p className="d-none d-sm-block d-lg-none">
        <a className="btn btn-primary" href="http://getbootstrap.com/">Built with Bootstrap</a>
      </p>

    </header>
  )
}