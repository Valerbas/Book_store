import { SET_CURRENT_PAGE } from '../actionTypes/settingsActionTypes';

const initial_state = {
    currentPage: 1,
    rowsPerPage: 10,
}

const settingsReducer = (state = initial_state, action: any) => {
    switch(action.type) {
        case SET_CURRENT_PAGE: {
            const { newPage } = action;
            return ({
                ...state,
                currentPage: newPage
            })
        }
        default: return state;
    }
}

export { settingsReducer }