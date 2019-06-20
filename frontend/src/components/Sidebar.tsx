import React from 'react';

import './FileSystemObj';
import './Sidebar.scss';
import { FileSystemObj } from './FileSystemObj';

export function Sidebar(props) {

  function renderFileStructure(files, mapping: any = []) {

    const display = files.map((file, index) => {
      const mapping2 = mapping.slice();
      mapping2.push(index);
      let displaySubLevel;

      if (file.files && file.files.length > 0) {
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