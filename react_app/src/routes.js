import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ChatList from './pages/ChatList';
//history
import { history } from './helpers/history';

//pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/Login"

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <RouteGuard exact path="/chatlist" component={ChatList} />
                <RouteGuard exact path="/chat/:slug" component={Chat} />
                <Route path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes
