import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: true,
          content: null,
      };
  }
  
  async componentDidMount() {
    let makeRequest = await Axios.get('http://localhost:3000/');

    this.setState({
      isLoading: false,
      content: makeRequest.data.files,
      fileContent: null,
    });
  }
  
  async fileClicked(fileName) {
    let makeRequest = await Axios.get(`http://localhost:3000/${fileName}`)

    this.setState({
        fileContent: makeRequest.data.content,
    })
  }

  render() {
      let files;
      if (this.state.content) {
        files = this.state.content.map((file) => {
          return <div onClick={() => this.fileClicked(file)}>{file}</div> 
        })
      }
      
      if (this.state.fileContent) {
          return (
              <React.Fragment>
                <h2>{this.state.content}</h2>
                <div>{this.state.fileContent}</div>
              </React.Fragment>
          )
      }
      return (
          <div>{this.state.isLoading ? 'Loading...' : files}</div>
      );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
)