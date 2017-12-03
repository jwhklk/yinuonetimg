import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import App from './components/index';

const CoApp = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={App}/>
        </Switch>
    );
}

//app
class AppRoot extends React.Component {
    render() {
        return (
            <div>
                <div className="pageWamp"><CoApp /></div>
            </div>
        );
    }
}

export default AppRoot;