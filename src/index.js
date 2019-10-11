import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom'
import routes from './routes';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import StoreContext from 'storeon/react/context'
import { store } from './store.js';
import './style/lnd.scss';

ReactDOM.render(
    <StoreContext.Provider value={store}>
        <Router history={createBrowserHistory()}>
            <Switch>
                {routes.map((route, ind) =>
                    <Route key={ind}
                           path={route.path}
                           exact={route.exact}
                           component={route.component}/>
               )}
            </Switch>
        </Router>
    </StoreContext.Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
