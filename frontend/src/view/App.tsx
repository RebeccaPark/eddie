import * as React from 'react';
import { API } from '../api/API';
import { Sidebar } from '../components/Sidebar';
import { ContentArea } from '../components/ContentArea';

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
  displayContent: string,
};

export class App extends React.Component<{}, stateInterface> {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      activeDir: [],
      displayContent: '',
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

    const response = await API.get('/open', {
      params: {
        isDirectory: fileInfo.isDirectory,
        path: fileInfo.path
      }
    });

    if (fileInfo.isDirectory) {
      const { files } = this.state;
      let subFiles: any = files[mapping[0]];

      for (let i = 0; i < mapping.length; i++) {
        if (i !== 0) {
          subFiles = subFiles.files[mapping[i]];
        }
        if (i === mapping.length - 1) {
          subFiles.files = response.data.files;
        }
      }

      this.setState({
        files
      });
    } else {
      this.setState({
        displayContent: response.data.fileContent
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Sidebar
          files={this.state.files}
          onPathClick={this.onPathClick}
        />
        <ContentArea 
          content={this.state.displayContent}
        />
      </div>
    );
  }
};