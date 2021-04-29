import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Action'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    onText(username,password){
        alert(`username:${username}, password:${password}`)
    }
    
    loginCheck(){
        if(this.props.userLogin.username == this.props.userRegister.username){
            if(this.props.userLogin.password == this.props.userRegister.password){
                this.props.navigation.navigate('Home');                
            }else{
                alert("password salah")
            }
        }else{
            alert("username salah")
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.textStyle}> Username </Text> 
                <TextInput styles={styles.inputStyle} placeholder="Username" onChangeText={(data)=>{this.props.LoginAction(data,"username")}}/>
                <Text style={styles.textStyle}> Password </Text>
                <TextInput styles={styles.inputStyle} placeholder="Password" onChangeText={(data)=>{this.props.LoginAction(data,"password")}}/>
                {/* <Button title="Login" color="#f194ff" onPress={this.onText.bind(this,this.state.username,this.state.password)}/> */}
                <Button title="Login" color="#f194ff" onPress={this.loginCheck.bind(this)}/>
                <Button title="Register" color="#f194ff" onPress={()=>{this.props.navigation.navigate("Register")}}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userLogin:state.LoginReducer,
    userRegister:state.RegisterReducer
})

const mapDispatchToProps = {
    LoginAction
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        padding:10
    },
    inputStyle:{
        borderWidth:10,
        borderColor:"red",
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

