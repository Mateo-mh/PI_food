import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const getRecipes = () => {
    const endpoint = 'http://localhost:3001/recipes';
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)
            console.log("llama al servidor");
            return dispatch({
                type: 'GET_RECIPES',
                payload: data,
            });
        } catch (error) {
            console.log(error.message);

        }

    };
};

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});