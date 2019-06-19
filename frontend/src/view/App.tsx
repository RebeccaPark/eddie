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
  activeDir: number[],
};

export class App extends React.Component<{}, stateInterface> {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      activeDir: [],
    };
    this.onPathClick = this.onPathClick.bind(this);
  }

  async componentDidMount() {
    const response = await API.get('/');
    this.setState({
      files: response.data.files
    });
  }

  async onPathClick(fileInfo: fileInfo, mapping: number[]) {
    console.log('mapping: ', mapping);
    
    const response = await API.get('/open', { 
      params: {
        isDirectory: fileInfo.isDirectory,
        path: fileInfo.path
      }
    });
    
    const { files } = this.state;
    files[mapping[0]].files = response.data.files;
    this.setState({
      files
    }, () => console.log(this.state));
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