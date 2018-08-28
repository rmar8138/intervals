import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import TimerPage from '../components/TimerPage'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/timer" component={TimerPage}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;