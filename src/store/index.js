import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combined from '../reducers';

const store = createStore(combined, composeWithDevTools(applyMiddleware(thunk)));

export default store;
