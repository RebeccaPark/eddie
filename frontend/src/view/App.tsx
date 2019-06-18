import * as React from 'react';
import { API } from '../api/API';
import { Sidebar } from '../components/Sidebar';

import './App.scss';

interface fileInfo {
  name: string,
  isDirectory: boolean,
  path: string,
  files?: fileInfo[],
  fileContent?: string,
};

interface stateInterface {
  files: fileInfo[],
};

export class App extends React.Component<{}, stateInterface> {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    this.onPathClick = this.onPathClick.bind(this);
  }

  async componentDidMount() {
    const response = await API.get('/');
    this.setState({
      files: response.data.files
    });
  }

  async onPathClick(fileInfo: fileInfo) {
    const response = await API.get('/open', {
      params: {
        isDirectory: fileInfo.isDirectory,
        path: fileInfo.path
      }
    });
  }

  render() {               
    return (
      <div className="app">
        <Sidebar 
          files={this.state.files}
          onPathClick={this.onPathClick}
        />
      </div>
    );
  }
};