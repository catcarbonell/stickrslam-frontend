import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import EditProfile from '../components/Profile/EditProfile';
import CreateProfile from '../components/Profile/CreateProfile';
import Stickers from '../components/Stickers';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Dashboard from '../components/Dashboard';
import Spinner from '../components/Spinner';
import Welcome from '../components/Welcome';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/spinner' component={Spinner} />
            <PrivateRoute exact path='/welcome' component={Welcome} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <PrivateRoute exact path='/profile/create' component={CreateProfile} />
            <PrivateRoute exact path='/profile/edit' component={EditProfile} />
            <PrivateRoute exact path='/stickers' component={Stickers} />
            <PrivateRoute  exact path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default Routes;