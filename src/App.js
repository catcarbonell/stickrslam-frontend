import React from 'react';
import Nav from './layout/Nav';
import Routes from './config/Routes';
import Alert from './layout/Alert';

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
          <Nav />
        <div className="App-content">
          <Alert />
          <Routes />
        </div>
      </Provider>
    
    );
  }
}

export default App;
