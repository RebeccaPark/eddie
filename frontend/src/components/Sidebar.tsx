import React from 'react';
import './Sidebar.scss';

export function Sidebar(props) {
  function renderFileStructure(files, mapping: any = []) {

    const display = files.map((file, index) => {
      const mapping2 = mapping.slice();
      mapping2.push(index);
      let displaySubLevel;
    
      if(file.files && file.files.length > 0) {
        console.log('here');
        displaySubLevel = renderFileStructure(file.files, mapping2);
      }

      return (
        <div>
          <div>
            {
              file.isDirectory && <span className="far fa-folder"></span>
            }
            {
              !file.isDirectory && <span className="far fa-file"></span>
            } 
            <span onClick={() => props.onPathClick(file, mapping2)}>{file.name}</span>
          </div>
          { displaySubLevel }
        </div>
      )
    })

    return (
      <div>
        {display}
      </div>
    )
  }

  return(
    <div className="sidebar">
      {renderFileStructure(props.files)}
    </div>
  )
}