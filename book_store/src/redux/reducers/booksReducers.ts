import { SET_BOOKS, SET_SEARCH_VALUE, SET_ACTIVE_BOOK, SET_ACTIVE_BOOK_ID, ADD_FAVORITE, REMOVE_FAVORITE, ADD_CARTITEM, REMOVE_CARTITEM, CALC_ONE_BOOK_PRICE } from "../actionTypes/booksActionTypes";
import { SET_COUNT_TOTAL } from "../actionTypes/settingsActionTypes";
import { IBookStore } from "../types";

const initialState = {
    books: [],
    searchValue: '',
    countTotal: 0,
    activeBookId: 0,
    activeBook: [],
    favorites: [],
    cart: [],
    cartPrice: []
}


const booksReducers = (state: IBookStore = initialState, action: any ) => {
    switch(action.type){
        case SET_COUNT_TOTAL: {
            const { count } = action
            return ({
                ...state,
                countTotal: +count,
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
        case ADD_CARTITEM: {
            const { id } = action;
            return ({
                ...state,
                cart: [...state.cart, id]
            })
        }
        case REMOVE_CARTITEM: {
            const { id } = action;
            return ({
                ...state,
                cart: state.cart.filter((el) => el !== id)
            })
        }
        case CALC_ONE_BOOK_PRICE: {
            const { oneBookPrice } = action;
            return ({
                ...state,
                cartPrice: [...state.cartPrice, oneBookPrice]
            })
        }
        default: return state;
    }
}

export {booksReducers}