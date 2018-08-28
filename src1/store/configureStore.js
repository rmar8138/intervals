import { createStore } from 'redux';
import timerReducer from '../reducers/reducer';

const configureStore = () => {
    const store = createStore(
        timerReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};

export default configureStore;