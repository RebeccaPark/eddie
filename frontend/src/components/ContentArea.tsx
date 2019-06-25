import * as React from 'react';

import { API } from '../api/API';

import './ContentArea.scss';

export class ContentArea extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      title: 'Untitled',
    };
  }

  componentWillReceiveProps(change) {
    if (change.content) {
      this.setState({
        content: change.content,
      });
    }

    if (change.title) {
      this.setState({
        title: change.title,
      })
    }
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  onTextAreaChange(e) {
    console.log('e: ', e.target.value);
    this.setState({
      content: e.target.value
    });
  }

  async onSave() {
    console.log('in onsave');
    console.log('content: ', this.state.content);
    const response = await API.post(`/save/${this.state.title}`, {
        content: this.state.content
    });
    console.log('responses: ', response);
  }

  render() {
    return (
      <div className="contentArea">
        <textarea 
          className="title"
          value={this.state.title}
          onChange={(e)=>this.onTitleChange(e)}
        ></textarea>
        <textarea 
          className="content"
          value={this.state.content}
          onChange={(e) => this.onTextAreaChange(e)}
        ></textarea>
        <button onClick={()=>this.onSave()}>Save</button>
      </div>
    );
  }
}