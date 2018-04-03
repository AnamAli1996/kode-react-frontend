import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoggedIn} from "./actions/auth";
import './app.css';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


if(localStorage.studentJWT){
    const user = { webToken: localStorage.studentJWT};
    store.dispatch(userLoggedIn(user));
}




ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
          <Route component={App} />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
