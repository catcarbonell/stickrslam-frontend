import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import Stickers from '../components/Stickers';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Dashboard from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/stickers' component={Stickers} />
            <PrivateRoute  exact path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default Routes;