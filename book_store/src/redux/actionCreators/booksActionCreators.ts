import { LOAD_BOOKS, SET_BOOKS, SET_SEARCH_VALUE } from "../actionTypes/booksActionTypes";
import {takeEvery, put} from "redux-saga/effects"
import { IBook } from "../types";
import { SET_COUNT_TOTAL } from "../actionTypes/settingsActionTypes"


function* fetchLoadBooks (action: any) {
    const { payload } = action
    const {rowsPerPage, currentPage, searchValue} = payload
    const response: Response = yield fetch('https://api.itbook.store/1.0/new')
    const data: {total: number, books: IBook[]} = yield response.json()
    const {books, total} = data
    console.log(data);
    
    yield put(setBooksTotal(total))
    yield put(setBooks(books))
} 


const loadBooks = (payload: {currentPage: number, rowsPerPage: number, searchValue: string}) => ({
    type: LOAD_BOOKS,
    payload
})

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books,
});

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setBooksTotal = (total: number) => ({
    type: SET_COUNT_TOTAL,
    total,
})

function* watcherBooks() {
    yield takeEvery('LOAD_BOOKS', fetchLoadBooks)
}

export {
    setBooks,
    loadBooks,
    watcherBooks,
    setSearchValue,
}