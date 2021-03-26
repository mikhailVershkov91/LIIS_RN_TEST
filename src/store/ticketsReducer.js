export const LOAD_TICKETS = "LOAD_TICKETS";
export const SET_TICKETS = "SET_TICKETS";
export const LIKE_ACTIVATE = "LIKE_ACTIVATE";
export const LIKE_DEACTIVATE = "LIKE_DEACTIVATE";
export const TOOGLE_FAVORITE = "TOOGLE_FAVORITE";

const initialState = {
	tickets: [],
	favoritesTickets: [],
	isFavorite: false,
	likeIsActive: false,
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
		case LIKE_ACTIVATE: {
			return {
				...state,
				likeIsActive: true,
			};
		}
		case LIKE_DEACTIVATE: {
			return {
				...state,
				likeIsActive: false,
			};
		}
		case TOOGLE_FAVORITE: {
			const favorites = state.tickets.map((ticket) => {
				if (ticket.id === action.id) {
					ticket.isFavorite = !ticket.isFavorite;
				}
				return ticket;
			});
			return {
				...state,
				tickets,
				favoritesTickets: action.tickets.filter((ticket) => ticket.favorites),
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

export const activateLike = () => ({
	type: LIKE_ACTIVATE,
});

export const deactivateLike = () => ({
	type: LIKE_DEACTIVATE,
});

export const toogleFavorite = (id) => ({
	type: TOOGLE_FAVORITE,
	id,
});
export default ticketsReducer;
