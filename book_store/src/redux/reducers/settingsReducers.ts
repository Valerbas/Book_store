import { SET_CURRENT_PAGE, SET_ACTIVE_TAB } from '../actionTypes/settingsActionTypes';

import { TABS } from '../../constants';

const initial_state = {
    activeTab: TABS.description,
    currentPage: 1,
    rowsPerPage: 15,
}

const settingsReducer = (state = initial_state, action: any) => {
    switch(action.type) {
        case SET_ACTIVE_TAB: {
            const { activeTab } = action;
            return ({
                ...state,
                activeTab,
            })
        }
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