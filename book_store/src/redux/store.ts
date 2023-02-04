import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects'

import { booksReducers } from './reducers/booksReducers';
import { watcherBooks } from './actionCreators/booksActionCreators';
import { settingsReducer } from './reducers/settingsReducers';
import { watcherUsers } from './actionCreators/userActionCreators';
import { userReducer } from './reducers/userReducer';

const sagaMiddleWare = createSagaMiddleware()
function* rootSaga(){
    yield all([
        watcherBooks(),
        watcherUsers(),
    ])
}

const rootReducers = combineReducers({
    books: booksReducers,
    settings: settingsReducer,
    users: userReducer,
})

export default createStore(rootReducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga)