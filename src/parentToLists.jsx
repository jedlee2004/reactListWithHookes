import React from 'react';
import List from './list';

export default function ParentToList (content1, content2) {
  const [ listOneContent, setListOneContent ] = React.useState(content1);
  const [ listTwoContent, setListTwoContent ] = React.useState(content2);

  function moveItem(listData, key) {
    const itemToMove = listData[key];

    if (listOneContent.hasOwnProperty(key)) {
      // Adding to list 2 object 
      const updated = Object.assign({}, listTwoContent);
      updated[key] = itemToMove;
      setListTwoContent(updated);

      // Removing from list one and updating list
      delete listData[key];
      setListOneContent(listData);
    } 

    else if (listTwoContent.hasOwnProperty(key)) {
      // Adding to list 2 object 
      const updated = Object.assign({}, listOneContent);
      updated[key] = itemToMove;
      setListOneContent(updated);

      // Removing from list one and updating list
      delete listData[key];
      setListTwoContent(listData);
    }
  }
  
  return (
    <div>
      {List(listOneContent, 'List 1', moveItem)}
      {List(listTwoContent, 'List 2', moveItem)}
    </div>
  )
}