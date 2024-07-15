import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from '../../task4-product_catalog/src/localStorage'

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(() => {
    saveState({
        cart: store.getState().cart
    });
});

export default store;
