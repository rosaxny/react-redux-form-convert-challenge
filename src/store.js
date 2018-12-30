import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import contactReducer from './reducers'

export default createStore(
    combineReducers({
        form: formReducer,
        contact: contactReducer
    })
);
