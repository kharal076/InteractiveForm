import React from 'react';
import DragDropFormBuilder from './components/DragDropForm/DragDropFormBuilder';
import './App.css'; // Global styles (if needed)

const App = () => {
  return (
    <div className="app">
      <h1>Interactive Form Builder</h1>
      <DragDropFormBuilder />
    </div>
  );
};

export default App;

