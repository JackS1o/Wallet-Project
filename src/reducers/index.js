import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const combined = combineReducers({ user });

export default combined;
