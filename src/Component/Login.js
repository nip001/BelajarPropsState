import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
            umur:20
        }
    }

    onText(username,password){
        alert(`username:${username}, password:${password}`)
    }
    
    loginCheck(xpassword){
        if(xpassword == "juaracoding"){
            this.props.navigation.navigate('TextAsik',this.state);
        }else{
            alert("password salah")
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.textStyle}> Username </Text> 
                <TextInput styles={styles.inputStyle} placeholder="Username" onChangeText={(data)=>{this.setState({username:data})}}/>
                <Text style={styles.textStyle}> Password </Text>
                <TextInput styles={styles.inputStyle} placeholder="Password" onChangeText={(data)=>{this.setState({password:data})}}/>
                {/* <Button title="Login" color="#f194ff" onPress={this.onText.bind(this,this.state.username,this.state.password)}/> */}
                <Button title="Login" color="#f194ff" onPress={this.loginCheck.bind(this,this.state.password)}/>
            </View>
        )
    }
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

export default Login;