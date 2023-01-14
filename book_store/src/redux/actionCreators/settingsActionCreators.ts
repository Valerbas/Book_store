import { SET_CURRENT_PAGE } from "../actionTypes/settingsActionTypes";

const setCurrentPage = (newPage: number) => ({
    type: SET_CURRENT_PAGE,
    newPage,
});

export { setCurrentPage }