import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';

function configureStore(state = { cars: [], bookingDetail:[]}) {
    return createStore(rootReducer,state);
}

export default configureStore;