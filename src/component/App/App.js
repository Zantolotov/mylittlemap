import React from 'react';
import NavBar from '../NavBar/NavBar'
import SubscribeBar from '../SubscribeBar/SubscribeBar';

class App extends React.Component {
  render(){
  return (<div>
    <NavBar />
   
    <SubscribeBar />
    <h2>I'm from App.js</h2>
    </div>);
  }
}

export default App;