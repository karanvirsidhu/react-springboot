import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { identifier } from '@babel/types';
import AuthenticationService from './AuthenticationService.js'

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path ="/" exact component = {LoginComponent} />
                        <Route path ="/login" component = {LoginComponent} />
                        <Route path ="/welcome/:name" component ={WelcomeComponent} />
                        <Route path = "/todos" component={TodoList} />
                        <Route path ="/logout" component= {LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
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

class LogoutComponent extends Component {
    render(){
        return(
            <>
                You are logged out.
                <div className="container">
                    Thank you for using the application.
                </div>
            </>
        )
    }
}

class WelcomeComponent extends Component{
    render(){
        return(
            <>
               <h3>Welcome</h3> 
               <div className="containers">
                Welcome {this.props.match.params.name} !!
                You can manage your todos <Link to="/todos">here</Link>
            </div>
            </>
            
        )
    }
}

class HeaderComponent extends Component{
    render(){
        return(
           <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                   <div><a className="navbar-brand" href="https://www.linkedin.com/in/karanvir-singh-sidhu/">Karanvir</a></div>
                   <ul className="navbar-nav">
                       <li ><Link className="nav-link" to="/welcome/Marshal">Home</Link></li>
                       <li ><Link className="nav-link" to="/todos">Todos</Link></li>
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end">
                       <li ><Link className="nav-link" to="/login">Login</Link></li>
                       <li ><Link className="nav-link" to="/login">Logout</Link></li>
                   </ul>
               </nav>
           </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return(
           <footer className="footer">
               <span className="text-muted">Jai Hind!!</span>
           </footer> 
        )
    }
}

function ErrorComponent (){
    return(
        <div>
            Error occured!! Please check the url.
        </div>
    )
}

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state ={
            todo :  [
                {id : 1, description : "Learn React" , status: true, targetDate : new Date()},
                {id : 2, description : "Get a job", status: false, targetDate : new Date()},
                {id : 3, description : "Buy Range Rover", status: false, targetDate : new Date()}
            ] 
                
        }
    }

    render(){
        return(
            <div>
                <h1>To Do List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map(
                                todo =>  
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.status.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TodoApp