import React from 'react';
import ReactDOM from 'react-dom';
import { } from 'redux';
import { } from 'react-router-dom';
import { Provider } from 'react-redux';
import { } from 'redux-thunk';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );

}

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.getElementById("root")
)