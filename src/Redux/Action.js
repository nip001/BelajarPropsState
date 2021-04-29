export function LoginAction(value,inputType){
    console.log("Action"+value)
    return {type: "LOGIN_VALUE", inputType: inputType, payload: value}
}
