import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import Stickers from '../components/Stickers';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import '../bulma.css';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/profile' component={Profile} />
            <Route path='/stickers' component={Stickers} />
        </Switch>
    )
}

export default Routes;