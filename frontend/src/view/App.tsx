import * as React from 'react';
import { API } from '../api/API';
import { Sidebar } from '../components/Sidebar';

import './App.scss';

export function App() {

  // React.useEffect(() => {
  //   API.get('/')
  //     .then(res => {console.log(res); console.log(res.data);});
  // }, [])

  return(
    <div className="app">
      <Sidebar></Sidebar>
    </div>
  );
};