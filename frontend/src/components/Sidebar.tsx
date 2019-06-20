import React from 'react';

import './FileSystemObject';
import './Sidebar.scss';
import { FileSystemObject } from './FileSystemObject';

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
        <div className="fileSystemGroup">
          <div onClick={() => props.onPathClick(file, mapping2)}>
            <FileSystemObject 
              file={file}
              onPathClick={props}/>
          </div>
          {displaySubLevel}
        </div>
      );
    })

    return (
      <React.Fragment>
        {display}
      </React.Fragment>
    )
  }

  return (
    <div className="sidebar">
      {renderFileStructure(props.files)}
    </div>
  )
}