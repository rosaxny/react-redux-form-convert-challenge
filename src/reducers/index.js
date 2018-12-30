import { ADD_FORM_DATA } from '../actions';

let initialState = {
    data: null
}

export default function reducer(state = initialState, action) {
    if (action.type === ADD_FORM_DATA) {
        return Object.assign({}, state, {
            data: action.data
        })
    }
    return state;
}