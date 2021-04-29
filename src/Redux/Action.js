export function LoginAction(value,inputType){
    // console.log("Action"+value)
    return {type: "LOGIN_VALUE", inputType: inputType, payload: value}
}

export function RegisterAction(value,inputType){
    // console.log("Action"+value)
    return {type: "REGISTER_VALUE", inputType: inputType, payload: value}
}
