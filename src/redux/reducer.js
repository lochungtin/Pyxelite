import { combineReducers } from 'redux';

import { ADD_COLOR, DELETE_COLOR, SET_ACTIVE_ACTION, SET_ACTIVE_COLOR, TOGGLE, } from './action';

import { accent } from '../data/color';

const activityInit = {
    action: 'test',
    color: accent.substring(1),
}
const updateActivity = (activity = activityInit, action) => {
    let update = { ...activity };
    switch (action.type) {
        case SET_ACTIVE_COLOR:
            update.color = action.payload;
            return update;

        case SET_ACTIVE_ACTION:
            update.action = action.payload;
            return update;

        default:
            return update;
    }
}

const updateLibrary = (library = [], action) => {
    let update = [...library];
    switch (action.type) {
        case ADD_COLOR:
            update.push(action.payload);
            return update;

        case DELETE_COLOR:
            update.splice(update.indexOf(action.payload), 1);
            return update;

        default:
            return update;
    }
}

const power = (on = false, action) => action.type === TOGGLE ? !on : on;

export default combineReducers({
    activity: updateActivity,
    library: updateLibrary,
    power: power,
});