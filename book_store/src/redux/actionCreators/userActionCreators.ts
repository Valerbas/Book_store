import { ACTIVATE_USERS, CONFIRM_REGISTRATION, GET_USER, LOG_OUT, SET_USER, SIGN_IN_USER } from "../actionTypes/userActionTypes";
import { takeEvery, put } from "redux-saga/effects";
import { IUser, jwtUserStore } from "../types";


const setUser = (user: IUser) => ({
    type: SET_USER,
    user,
})

function* postRegisterUser(action: any) {
    const { data } = action
    const responce: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    const results: IUser = yield responce.json()
    console.log(results);
    
   
}

// username: 'valery', email: 'jasosam217@bitvoo.com', id: 5649, password: 'pristrom123'
//username: "valerbas", email: "xagoy75288@bitvoo.com", id: 5670

function* fetchUserInfo() {
    const token: string = yield getToken();
    if (token) { 
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const result: IUser = yield data.json()
    console.log(result);
    yield put(setUser(result))
}
}

function* fetchSignInUser(action: any) {
    const { userData, navigate } = action
    const responce: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData)
    })
    const results: jwtUserStore = yield responce.json()
    if (responce.status < 300) {
        localStorage.setItem('jwtAccess', results.access)
        localStorage.setItem('jwtRefresh', results.refresh)
        yield fetchUserInfo()
        navigate('/')
    } else {
        console.log('error');
        
    }
    
}

const signInUser = (userData: IUser, navigate: Function) => ({
    type: SIGN_IN_USER,
    userData,
    navigate,
})

function* fetchActivateUser(action: any) {
    const { userData, navigate } = action
    const responce: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData) })

    if (responce.status < 300) {
        navigate('/success')
    } else {
        console.log('error');
        
    }
}

export function* getToken() {
    const token = localStorage.getItem('jwtAccess')
    if (token !== 'undefined') {
        const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({token}) })

        if (response.status === 200) {
            return token
        } else {
            const refresh = localStorage.getItem('jwtRefresh')
            const respRefresh: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
                body: JSON.stringify({ refresh }) })

            const data: jwtUserStore = yield respRefresh.json()
            const { access } = data
                localStorage.setItem('jwtAccess', access)
                return access
        }
    }
    return ''
}

const getUser = () => ({
    type: GET_USER,
})

const registerUser = (data: IUser) => ({
    type: CONFIRM_REGISTRATION,
    data,
})

const activateUser = (userData: {token: string, uid: string}, navigate: Function) => ({
    type: ACTIVATE_USERS,
    userData,
    navigate,
})


const logOut = () => ({
    type: LOG_OUT,
})

function* watcherUsers() {
    yield takeEvery(CONFIRM_REGISTRATION, postRegisterUser)
    yield takeEvery(ACTIVATE_USERS, fetchActivateUser)
    yield takeEvery(SIGN_IN_USER, fetchSignInUser)
    yield takeEvery(GET_USER, fetchUserInfo)
}

export {
    postRegisterUser,
    watcherUsers,
    registerUser,
    activateUser,
    signInUser,
    getUser,
    logOut,
}