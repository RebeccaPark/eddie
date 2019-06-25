import * as React from 'react';

import './ContentArea.scss';

export class ContentArea extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentWillReceiveProps(change) {
    this.setState({
      content: change.content,
    });
  }

  onTextAreaChange(e) {
    console.log('e: ', e.target.value);
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return(
      <div className="contentArea">
        <pre>
          <textarea
            value={this.state.content}
            onChange={(e) => this.onTextAreaChange(e)}  
          ></textarea>
        </pre>
      </div>
    );
  }
}