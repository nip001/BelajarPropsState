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
        console.log(this.props.user.username)
        this.props.navigation.navigate('Home');
        
        // if(xpassword == "juaracoding"){
        //     this.props.navigation.navigate('TextAsik',this.state);
        // }else{
        //     alert("password salah")
        // }
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
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.LoginReducer
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

