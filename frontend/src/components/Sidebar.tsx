import React from 'react';
import './Sidebar.scss';

export function Sidebar(props) {
   console.log(props);

  // React.useEffect(() => {
  //   console.log('sidebar props: ', props);
  // }, [props])
  return(
    <div className="sidebar">
      { 
        props.files && props.files.map((file) => {
        return (
          <div>
            <span className="fa fa-folder"></span>
            <div>{file.name}</div>
          </div>
        )})
      }
      {
        !props.files && ''
      }
      }
    </div>
  )
}