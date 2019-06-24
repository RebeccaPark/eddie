import React from 'react';

import './ContentArea.scss';

export function ContentArea(props) {
  return(
    <div 
      className="contentArea"
      contenteditable="true"
    >
      {props.content}
    </div>
  )
}