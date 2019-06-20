import React from 'react';

import './FileSystemObj';
import './Sidebar.scss';
import { FileSystemObj } from './FileSystemObj';

export function Sidebar(props) {

  function renderFileStructure(files, mapping: any = []) {

    const display = files.map((file, index) => {
      const mapping2 = mapping.slice();
      //console.log('here1: ', mapping2.slice());
      mapping2.push(index);
      //console.log('here2: ', mapping2.slice());
      let displaySubLevel;

      if (file.files && file.files.length > 0) {
        //console.log('here3: ', mapping2.slice());
        displaySubLevel = renderFileStructure(file.files, mapping2);
      }

      return (
        <div>
          <div onClick={() => props.onPathClick(file, mapping2)}>
            <FileSystemObj file={file}/>
          </div>
          {displaySubLevel}
        </div>
      )
    })

    return (
      <div>
        {display}
      </div>
    )
  }

  return (
    <div className="sidebar">
      {renderFileStructure(props.files)}
    </div>
  )
}