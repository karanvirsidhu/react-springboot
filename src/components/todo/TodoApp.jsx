import React, {Component} from 'react'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
} 

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "Marshal",
            password : ""
        }

     //   this.handleUsernameChange = this.handleUsernameChange.bind(this);
     //   this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        console.log(event.target.name)
        this.setState(
            {   // the set state expects the key to be a specific value not a variable 
                //to use variable put it inside sqare bracets
                [event.target.name] : event.target.value
            }
        )
    }


    render(){
        return(
            <div>
                User Name : <input type="text" name="username" value={this.state.username} onChange = {this.handleChange} />
                Password  : <input type="password" name="password" value={this.state.password} onChange = {this.handleChange}/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp