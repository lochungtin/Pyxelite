import { combineReducers } from 'redux';

const placholder = (base = {}, action) => {
    return base;
}

export default combineReducers({
    placholder: placholder,
});