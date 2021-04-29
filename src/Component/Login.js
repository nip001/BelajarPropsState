import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Action'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // username:"mantap",
            password:"",
        }
    }

    onText(username,password){
        alert(`username:${username}, password:${password}`)
    }
    
    loginCheck(xpassword){
        console.log(this.props.user)
        // if(xpassword == "juaracoding"){
        //     this.props.navigation.navigate('TextAsik',this.state);
        // }else{
        //     alert("password salah")
        // }
    }

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <View>
                <Text style={styles.textStyle}> Username </Text> 
                <TextInput styles={styles.inputStyle} placeholder="Username" onChangeText={(data)=>{this.props.LoginAction(data,"username")}}/>
                <Text style={styles.textStyle}> Password </Text>
                <TextInput styles={styles.inputStyle} placeholder="Password" onChangeText={(data)=>{this.setState({password:data})}}/>
                {/* <Button title="Login" color="#f194ff" onPress={this.onText.bind(this,this.state.username,this.state.password)}/> */}
                <Button title="Login" color="#f194ff" onPress={this.loginCheck.bind(this,this.state.password)}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.LoginReducer.username
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

