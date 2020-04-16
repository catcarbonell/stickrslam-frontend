import React from 'react';
import Nav from './layout/Nav';
// import Footer from './layout/Footer';
import Routes from './config/Routes';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './bulma.css';
import './index.css';
// Maintain State here
class App extends React.Component{
  render(){
    return (
        <Provider store={store}>
        <div className="App-content">
          <Nav />
          <Routes />
          {/* <Footer /> */}
        </div>
      </Provider>
    
    );
  }
}

export default App;
