import { combineReducers } from "redux";

const initialStateLogin = {
    username:"",
    password:""
}

const initialStateRegister = {
    username:"",
    password:"",
    name:"",
    alamat:"",
}

const LoginReducer = (state = initialStateLogin, action)=>{
    // console.log("reducer"+JSON.stringify(state))
    if(action.type === "LOGIN_VALUE"){
        return{
            ...state,
            [action.inputType] : action.payload,
        }
    }
    return state;
}

const RegisterReducer = (state = initialStateRegister, action)=>{
    // console.log("reducer"+JSON.stringify(state))
    if(action.type === "REGISTER_VALUE"){
        return{
            ...state,
            [action.inputType] : action.payload,
        }
    }
    return state;
}

const reducer= combineReducers({
    LoginReducer,
    RegisterReducer
})

export default reducer