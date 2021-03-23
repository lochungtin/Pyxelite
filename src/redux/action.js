export const TOGGLE = 'TOGGLE';
export const toggle = () => ({
    type: TOGGLE,
});

export const ADD_COLOR = 'ADD_COLOR';
export const addColor = payload => ({
    type: ADD_COLOR,
    payload,
});

export const DELETE_COLOR = 'DELETE_COLOR';
export const deleteColor = payload => ({
    type: DELETE_COLOR,
    payload,
});

export const SET_ACTIVE_COLOR = 'SET_ACTIVE_COLOR';
export const setActiveColor = payload => ({
    type: SET_ACTIVE_COLOR,
    payload,
});

export const SET_ACTIVE_ACTION = 'SET_ACTIVE_ACTION';
export const setActiveAction = payload => ({
    type: SET_ACTIVE_ACTION,
    payload,
});

export const SET_PRESET = 'SET_PRESET';
export const setPreset = payload => ({
    type: SET_PRESET,
    payload,
});

export const SET_ACTIVE_BRIGHTNESS = 'SET_ACTIVE_BRIGHTNESS';
export const setActiveBrightness = payload => ({
    type: SET_ACTIVE_BRIGHTNESS,
    payload,
});

export const SET_ACTIVE_SPEED = 'SET_ACTIVE_SPEED';
export const setActiveSpeed = payload => ({
    type: SET_ACTIVE_SPEED,
    payload,
});

export const SET_IP = 'SET_IP';
export const setIP = payload => ({
    type: SET_IP,
    payload,
});
