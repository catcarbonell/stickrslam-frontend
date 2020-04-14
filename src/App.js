import React from 'react';
import Nav from './layout/Nav';
// import Footer from './layout/Footer';
import Routes from './config/Routes';
import './bulma.css';
import './index.css';
// Maintain State here
class App extends React.Component{

  state = {};

  render(){
    return (
      <div className="App-content">
        <Nav />
        <Routes />
        {/* <Footer /> */}
      </div>    
    
    );
  }
}

export default App;
