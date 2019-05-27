import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                    <Route path ="/" exact component = {LoginComponent} />
                    <Route path ="/login" component = {LoginComponent} />
                    <Route path ="/welcome" component ={WelcomeComponent} />
                    </>
                </Router>
            </div>
        )
    }
} 

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
        if(this.state.username === 'Marshal' && this.state.password === 'qwerty'){
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
            <div>
                <CheckCredentials hasLoginPassed = {this.state.hasLoginPassed} hasLoginFailed = {this.state.hasLoginFailed} />
                User Name : <input type="text" name="username" value={this.state.username} onChange = {this.handleChange} />
                Password  : <input type="password" name="password" value={this.state.password} onChange = {this.handleChange}/>
                <button onClick= {this.handleLogin}>Login</button>
            </div>
        )
    }
}

function CheckCredentials(props){
    if(props.hasLoginPassed == true){
        return <div>Login Successful</div>
    }
    else if(props.hasLoginFailed == true){
        return <div>Invalid Credentials</div>
    }
    else return null
}

class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome Marshal !!
            </div>
        )
    }
}


export default TodoApp