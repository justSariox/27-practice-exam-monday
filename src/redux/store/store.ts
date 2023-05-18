import {combineReducers, legacy_createStore as createStore} from "redux";
import {CounterReducer} from "../reducers/CounterReducer";

const rootReducers = combineReducers({
    CounterReducer
})

const saveToLocalStorage = (state: rootStateType) => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    } catch (e) {
        console.error(e)
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state')
        return stateStr ? JSON.parse(stateStr) : undefined
    } catch (e) {
        console.error(e)
        return undefined
    }
}

const persistedStore = loadFromLocalStorage()

const store = createStore(rootReducers, persistedStore)

export type rootStateType = ReturnType<typeof rootReducers>

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})

export default store

// @ts-ignore
window.store = store