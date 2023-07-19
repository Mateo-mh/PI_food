import { GET_RECIPES, SET_CURRENT_PAGE } from "./actions";
import RECIPES_PER_PAGE from "../components/CardsContainer/CardsContainer.jsx"

const initialState = {
    recipes: [],
    currentPage: 1,
    totalPages: 1,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return { 
                ...state, 
                recipes: action.payload,
                totalPages: Math.ceil(action.payload.length / RECIPES_PER_PAGE)
            };
            case SET_CURRENT_PAGE:
                return { ...state, currentPage: action.payload };
        default:
            return {...state};
    }
}

export default rootReducer;