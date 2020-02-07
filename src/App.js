import React from 'react';
import './App.css';
import ParentToList from './parentToLists';

const listOne = {
  1: 'item1',
  2: 'item2',
  3: 'item3',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>List Swapping</p>
        <div>
          {ParentToList(listOne, {})}
        </div>
      </header>
    </div>
  );
}

export default App;
