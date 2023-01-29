import { LOAD_BOOKS, SET_BOOKS, SET_SEARCH_VALUE, LOAD_SEARCHED_BOOKS, SET_ACTIVE_BOOK, SET_ACTIVE_BOOK_ID } from "../actionTypes/booksActionTypes";
import {takeEvery, put, take} from "redux-saga/effects"
import { IBook } from "../types";
import { SET_COUNT_TOTAL } from "../actionTypes/settingsActionTypes"


function* fetchLoadBooks (action: any) {
    const { payload } = action
    const {rowsPerPage, currentPage, searchValue} = payload
    if (!searchValue) {
        const response: Response = yield fetch('https://api.itbook.store/1.0/new')
        const data: {total: number, books: IBook[]} = yield response.json()
        const {books, total} = data
    
        yield put(setBooksTotal(total))
        yield put(setBooks(books))
    }
    if (searchValue) {
        const response: Response = yield fetch(`https://api.itbook.store/1.0/search/${searchValue}/${currentPage}`)
        const data: {total: number, books: IBook[]} = yield response.json()
        const {books, total} = data
    
        yield put(setBooksTotal(total))
        yield put(setBooks(books))
    }
} 


const loadBooks = (payload: {currentPage: number, rowsPerPage: number, searchValue: string}) => ({
    type: LOAD_BOOKS,
    payload
})

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books,
});

/* function* fetchSearchValue(action: any) {
    const { payload } = action
    const {currentPage, searchValue} = payload
    const response: Response = yield fetch(`https://api.itbook.store/1.0/search/${searchValue}/${currentPage}`)
    const data: IBook[] = yield response.json()
    const books = data

    yield put(setBooks(books))
} */

/* const loadSearchedBooks = (payload: {currentPage: number, searchValue: string}) => ({
    type: LOAD_SEARCHED_BOOKS,
    payload,
}) */

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setBooksTotal = (total: number) => ({
    type: SET_COUNT_TOTAL,
    total,
})

const activeBookId = (id: number, navigate: any) => ({
    type: SET_ACTIVE_BOOK_ID,
    id,
})

const activeBook = (data: IBook) => ({
    type: SET_ACTIVE_BOOK,
    data,
})

function* fetchSelectBook (payload: any) {
    localStorage.getItem('book') && localStorage.removeItem('book')
    const { id } = payload
    const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${id}`)
    const data: IBook = yield response.json()
    localStorage.setItem('book', JSON.stringify(data))
    yield put(activeBook(data))
}

function* watcherBooks() {
    yield takeEvery('LOAD_BOOKS', fetchLoadBooks)
    yield takeEvery('SET_ACTIVE_BOOK_ID', fetchSelectBook)
}

export {
    setBooks,
    loadBooks,
    activeBook,
    activeBookId,
    watcherBooks,
    setSearchValue,
}