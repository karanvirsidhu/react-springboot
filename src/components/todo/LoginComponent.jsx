import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js';
import {Route, Redirect} from 'react-router-dom';


class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "Marshal",
            password : "",
            hasLoginFailed : false,
            hasLoginPassed : false
        }

     //   this.handleUsernameChange = this.handleUsernameChange.bind(this);
     //   this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

  /*  handleUsernameChange(event){
        console.log(event.target.value)
        this.setState(
            {
                username : event.target.value
            }
        )
    }

    handlePasswordChange(event){
        this.setState(
            {
                password : event.target.value
            }
        )
    }
    */
    // creating generic event for handling multiple event change
    handleChange(event){
     //   console.log(event.target.name)
        this.setState(
            {   // the set state expects the key to be a specific value not a variable 
                //to use variable put it inside sqare bracets
                [event.target.name] : event.target.value
            }
        )
    }

    handleLogin(){
        if(this.state.username === 'Marshal1' && this.state.password === 'qwerty'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)     //redirecting to welcome page.
            
            this.setState ({
                 hasLoginPassed : true,
                 hasLoginFailed: false
                })
        }
        else{
            this.setState ({
                hasLoginPassed : false,
                hasLoginFailed : true
             })
               
        }
          
     }
    
    render(){
        return(
            
            <div className="container">
                <h3>Login</h3>
                <CheckCredentials hasLoginPassed = {this.state.hasLoginPassed} hasLoginFailed = {this.state.hasLoginFailed} />
                User Name : <input type="text" name="username" value={this.state.username} onChange = {this.handleChange} />
                Password  : <input type="password" name="password" value={this.state.password} onChange = {this.handleChange}/>
                <button className="btn btn-success" onClick= {this.handleLogin}>Login</button>
            </div>
        )
    }
}

function CheckCredentials(props){
    if(props.hasLoginPassed == true){
        return <div>Login Successful</div>
    }
    else if(props.hasLoginFailed == true){
        return <div className="alert alert-warning">Invalid Credentials</div>
    }
    else return null
}

export default LoginComponent;