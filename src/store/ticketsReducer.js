export const LOAD_TICKETS = "LOAD_TICKETS";
export const SET_TICKETS = "SET_TICKETS";

const initialState = {
	tickets: [],
	favoritesTickets: [],
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TICKETS: {
			return {
				...state,
				tickets: action.tickets,
				// favoritesTickets: action.tickets.filter(ticket => ticket.favorites)
			};
		}
		default:
			return state;
	}
};

export const loadTickets = () => ({
	type: LOAD_TICKETS,
});

export const setTickets = (tickets) => ({
	type: SET_TICKETS,
	tickets,
});

export default ticketsReducer;
