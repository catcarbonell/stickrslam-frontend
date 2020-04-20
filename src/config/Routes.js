import React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing';
import Profiles from '../components/Profiles';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile';
import CreateProfile from '../components/Profile/CreateProfile';
import Posts from '../components/Posts';
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
            <Route path='/profiles' component={Profiles} />
            <Route path='/profile/:id' component={Profile} />
            <Route path='/posts' component={Posts} />

            <PrivateRoute exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/spinner' component={Spinner} />
            <PrivateRoute exact path='/welcome' component={Welcome} />
            <PrivateRoute exact path='/create' component={CreateProfile} />
            <PrivateRoute exact path='/edit' component={EditProfile} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
    )
}

export default Routes;