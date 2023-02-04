import { GET_USER, LOG_OUT, SET_USER } from "../actionTypes/userActionTypes";
import { IUserStore  } from "../types";

const initialState = {
    user: null
}

const userReducer = (state = initialState, action: any) => {
    switch(action.type){
        case SET_USER: {
            const { user } = action;
            console.log(user);
            
            return ({
                ...state,
                user,
            })
        }
        case LOG_OUT: {
            return ({
                ...state,
                user: null,
            })
        }
        default: return state;
    }
}

export { userReducer }