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

export const UPDATE_BRIGHTNESS = 'UPDATE_BRIGHTNESS';
export const updateBrightness = payload => ({
    type: UPDATE_BRIGHTNESS,
    payload,
});

export const UPDATE_SPEED = 'UPDATE_SPEED';
export const updateSpeed = payload => ({
    type: UPDATE_SPEED,
    payload,
});
