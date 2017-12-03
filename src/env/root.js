import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import AppRoot from '../approot.js';
const history = createHistory();

let Root = (props)=>(
    <ConnectedRouter history={history}>
        <Route path="/" component={AppRoot}/>
    </ConnectedRouter>
);
export default Root;