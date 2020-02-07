import React from 'react';

export default function List (listData, label, onClickCb) {
  const listKeys = Object.keys(listData);

  if (listKeys.length > 0) {
    return (
      <div>
        <label>{label}</label>
        <ul>
          {listKeys.map((key) => <li key={key} onClick={() => onClickCb(listData, key)}>{listData[key]}</li>)}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <label>{`List is empty`}</label>
      </div>
    )
  }
}