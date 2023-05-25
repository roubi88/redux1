import React from 'react';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';

function App() {
  return (
    <div className="App">
     <h2>ToDo App</h2>
     <AddTask/>
     <hr/>
     <ListTask/>
     <hr/>
    </div>
  );
}

export default App;
