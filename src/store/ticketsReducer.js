export const LOAD_TICKETS = "LOAD_TICKETS";
export const SET_TICKETS = "SET_TICKETS";
export const LIKE_ACTIVATE = "LIKE_ACTIVATE";
export const LIKE_DEACTIVATE = "LIKE_DEACTIVATE";
export const TOOGLE_FAVORITE = "TOOGLE_FAVORITE";

const initialState = {
	tickets: [],
	cards: [
		{ id: 1, likeIsActive: false },
		{ id: 2, likeIsActive: false },
		{ id: 3, likeIsActive: false },
		{ id: 4, likeIsActive: false },
		{ id: 5, likeIsActive: false },
	],
};

const ticketsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TICKETS: {
			return {
				...state,
				tickets: action.tickets,
			};
		}
		case LIKE_ACTIVATE: {
			return {
				...state,
				cards: state.cards.map((card) => {
					if (card.id === action.id) {
						return { ...card, likeIsActive: true };
					}
					return card;
				}),
			};
		}
		case LIKE_DEACTIVATE: {
			return {
				...state,
				cards: state.cards.map((card) => {
					if (card.id === action.id) {
						return { ...card, likeIsActive: false };
					}
					return card;
				}),
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

export const activateLike = (id) => ({
	type: LIKE_ACTIVATE,
	id,
});

export const deactivateLike = (id) => ({
	type: LIKE_DEACTIVATE,
	id,
});

export default ticketsReducer;
