import { SET_CURRENT_PAGE, SET_ACTIVE_TAB } from "../actionTypes/settingsActionTypes";

const setCurrentPage = (newPage: number) => ({
    type: SET_CURRENT_PAGE,
    newPage,
});

const setActiveTab = (activeTab: string) => ({
    type: SET_ACTIVE_TAB,
    activeTab,
});

export { setCurrentPage, setActiveTab }