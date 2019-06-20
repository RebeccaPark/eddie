import React from 'react';

export function FileSystemObj(props) {
  return (
    <div>
      {
        props.file.isDirectory &&
        <span className="far fa-folder"></span>
      }
      {
        !props.file.isDirectory && 
        <span className="far fa-file"></span>
      }
      <span>{props.file.name}</span>
    </div>
  )
}