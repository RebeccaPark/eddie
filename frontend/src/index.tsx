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
      content: makeRequest.data.results[0],
    });
  }

  render() {

      return (
          <div>{this.state.isLoading ? 'Loading...' : this.state.content}</div>
      );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
)