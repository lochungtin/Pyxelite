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