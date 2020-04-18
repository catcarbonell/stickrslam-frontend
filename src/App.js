import React, { useEffect } from 'react';
import Nav from './layout/Nav';
import Routes from './config/Routes';
import Alert from './layout/Alert';


// REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// CSS
import './bulma.css';
import './index.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App = () => {
    
    useEffect(() => {
      store.dispatch(loadUser());
    },[]);

    return (
        <Provider store={store}>
          <Nav />
        <div className="App-content">
          <Alert />
          <Routes />
        </div>
      </Provider>
    
    )};
export default App;
