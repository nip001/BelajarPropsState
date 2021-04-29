import { combineReducers } from "redux";

const initialStateLogin = {
    username:"",
    password:"",
    nama:"",
    alamat:"",
}

const LoginReducer = (state = initialStateLogin, action)=>{
    console.log("reducer"+JSON.stringify(state))
    if(action.type === "LOGIN_VALUE"){
        return{
            ...state,
            [action.inputType] : action.payload,
        }
    }
    return state;
}

const reducer= combineReducers({
    LoginReducer,
})

export default reducer