import { SET_BOOKS, SET_SEARCH_VALUE, SET_ACTIVE_BOOK, SET_ACTIVE_BOOK_ID, ADD_FAVORITE, REMOVE_FAVORITE } from "../actionTypes/booksActionTypes";
import { SET_COUNT_TOTAL } from "../actionTypes/settingsActionTypes";
import { IBookStore } from "../types";

const initialState = {
    books: [],
    searchValue: '',
    countTotal: 0,
    activeBookId: 0,
    activeBook: [],
    favorites: [],
}


const booksReducers = (state: IBookStore = initialState, action: any ) => {
    switch(action.type){
        case SET_COUNT_TOTAL: {
            const { total } = action;
            return ({
                ...state,
                countTotal: total
            })
        }
        case SET_BOOKS: {
            const {books} = action
            return({
                ...state,
                books,
            })
        }
        case SET_SEARCH_VALUE: {
            const { value } = action
            return ({
                ...state,
                searchValue: value,
            }) 
        }
        case SET_ACTIVE_BOOK_ID: {
            const { id } = action
            return ({
                ...state,
                activeBookId: id,
            })
        }
        case SET_ACTIVE_BOOK: {
            const { data } = action
            return ({
                ...state,
                activeBook: [ data],
            })
        }
        case ADD_FAVORITE: {
            const { id } = action;
            return ({
                ...state,
                favorites: [...state.favorites, id]
            })
        }
        case REMOVE_FAVORITE: {
            const { id } = action;
            return ({
                ...state,
                favorites: state.favorites.filter((el) => el !== id)
            })
        }
        default: return state;
    }
}

export {booksReducers}