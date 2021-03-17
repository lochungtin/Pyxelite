import { combineReducers } from 'redux';
import { TOGGLE } from './action';

const power = (on = false, action) => action.type === TOGGLE ? !on : on;

export default combineReducers({
    power: power,
});