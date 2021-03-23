import { combineReducers } from 'redux';

import {
    ADD_COLOR,
    DELETE_COLOR,
    SET_ACTIVE_ACTION,
    SET_ACTIVE_BRIGHTNESS,
    SET_ACTIVE_COLOR,
    SET_ACTIVE_SPEED,
    SET_PRESET,
    TOGGLE,
} from './action';

import { accent } from '../data/color';

const activityInit = {
    action: 'static',
    brightness: 200,
    color: accent,
    speed: 50,
}
const updateActivity = (activity = activityInit, action) => {
    let update = { ...activity };
    switch (action.type) {
        case SET_ACTIVE_ACTION:
            update.action = action.payload;
            return update;

        case SET_ACTIVE_BRIGHTNESS:
            update.brightness = action.payload;
            return update;

        case SET_ACTIVE_COLOR:
            update.color = action.payload;
            return update;

        case SET_ACTIVE_SPEED:
            update.speed = action.payload;
            return update;

        default:
            return activity;
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
            return library;
    }
}

const updatePower = (on = false, action) => action.type === TOGGLE ? !on : on;

const presetInit = [
    {
        action: 'static',
        color: accent,
        speed: 50,
        brightness: 200,
    },
    {
        action: 'breathe',
        color: accent,
        speed: 50,
        brightness: 200,
    },
    {
        action: 'wave',
        color: accent,
        speed: 50,
        brightness: 200,
    }
]
const updatePreset = (preset = presetInit, action) => {
    let update = [...preset];
    if (action.type === SET_PRESET) {
        update[action.payload.num] = action.payload.data;
        return update;
    }
    return preset
}

export default combineReducers({
    activity: updateActivity,
    library: updateLibrary,
    power: updatePower,
    preset: updatePreset,
});