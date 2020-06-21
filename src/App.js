import React from 'react';
import './App.css';
import Student from './Students.js';

function App() {
  return (
    <div className='App'>
      <Student studentName="Ali Ahmad" education="B.Sc" />
      <Student studentName="Zahra" education="B.A" />
      <Student studentName="Qasim" education="B.Com" />
      <Student studentName="Zeba" education="Phd" />
      <Student studentName="Anum" education="Metric" />
    </div>
  );
}

export default App;
