import { put, takeEvery, call } from "redux-saga/effects";
import { setTickets, LOAD_TICKETS } from "../store/ticketsReducer";
import axios from "axios";

function fetchTickets() {
	return axios({
		method: "GET",
		baseURL: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/2021-07-01`,
		headers: {
			"x-rapidapi-key": "db30e2ca2amsh8f6539960949c96p17247fjsnc41af8a6c425",
			"x-rapidapi-host":
				"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		},
	});
}

function* ticketsWorker() {
	const tickets = yield call(fetchTickets);
	yield put(setTickets(tickets));
}

export function* ticketsWatcher() {
	yield takeEvery(LOAD_TICKETS, ticketsWorker);
}
