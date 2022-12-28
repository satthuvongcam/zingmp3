import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reduxConfigure = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
};

export default reduxConfigure;
