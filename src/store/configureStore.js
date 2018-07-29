import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import resumeReducer from '../reducers/resumeReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            resume: resumeReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}

export default configureStore;
