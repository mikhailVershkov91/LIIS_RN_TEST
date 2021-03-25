import { createStore, combineReducers, applyMiddleware } from "redux";
import ticketsReducer from "./ticketsReducer";
import createSagaMiddleware from "redux-saga";
import { ticketsWatcher } from "../saga/ticketsSaga";

const sagaMiddleware = createSagaMiddleware();

let rootReducer = combineReducers({
	tickets: ticketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(ticketsWatcher);

export default store;
