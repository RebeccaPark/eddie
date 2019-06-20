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
    let subFiles:any = files[mapping[0]];
    //console.log('subFiles: ', subFiles);
    for(let i=0; i < mapping.length; i++) {
      if(i !== 0) {
        subFiles = subFiles.files[mapping[i]];
      }
      console.log('subFiles: ', subFiles);
      console.log('outside if');
      if (i === mapping.length - 1) {
        console.log('inside if');
        subFiles.files = response.data.files;
      }
    } 

    console.log('files: ', files);

    this.setState({
      files
    }, () => return console.log('this.state.files: ', this.state.files));
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