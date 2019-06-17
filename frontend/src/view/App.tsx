import * as React from 'react';
import { API } from '../api/API';
import { Sidebar } from '../components/Sidebar';

import './App.scss';

interface stateInterface {
  files: any[],
};

export class App extends React.Component<{}, stateInterface> {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  componentDidMount() {
    API.get('/')
      .then(res => { this.setState({ files: res.data.files; })}; //console.log('res.data: ', res.data);})
      //.then(() => { console.log('files: ', files); });
  }
  render() {
    return (
      <div className="app">
        <Sidebar files={this.state.files}></Sidebar>
      </div>
    );
  }
};