import React from 'react';
import './Sidebar.scss';

export function Sidebar(props) {
  return(
    <div className="sidebar">
      { 
        props.files && props.files.map((file) => {
        return (
          <div>
            {
              file.isDirectory && <span className="far fa-folder"></span>
            }
            {
              !file.isDirectory && <span className="far fa-file"></span>
            }
            <span onClick={() => props.onPathClick(file)}>{file.name}</span>
          </div>
        )})
      }
    </div>
  )
}