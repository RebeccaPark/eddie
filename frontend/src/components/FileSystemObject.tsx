import React from 'react';

import './FileSystemObject.scss';

export function FileSystemObject(props) {
  return (
    <div className="fileSystemObject">
      {
        props.file.isDirectory && 
        props.file.files ?
        <span className="fileSystemObject_icon fa fa-caret-down"></span> :
        <span className="fileSystemObject_icon fa fa-caret-right"></span>
      }
      {
        !props.file.isDirectory && 
        <span className="fileSystemObject_icon fa fa-file-alt"></span>
      }
      <span className="fileSystemObject__name">{props.file.name}</span>
    </div>
  )
}