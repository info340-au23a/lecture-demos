import React from 'react';

import { PageHeader } from './Header.js';
import { CourseList } from './CourseCards.js';

export default function App(props) {

  const greetee = "World";
  // const myObj = {name: "Joel"};

  return (
    <div>
      <PageHeader />
      <main className="container">
        <CourseList />
      </main>
    </div>
  )
}