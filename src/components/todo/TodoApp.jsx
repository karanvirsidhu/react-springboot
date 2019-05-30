import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { identifier } from '@babel/types';
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ToDoList from './ToDoList.jsx'

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
                        <AuthenticatedRoute path ="/welcome/:name" component ={WelcomeComponent} />
                        <AuthenticatedRoute path = "/todos" component={ToDoList} />
                        <AuthenticatedRoute path ="/logout" component= {LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
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
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }
    retrieveWelcomeMessage(){
        console.log('retrieve')
    }
    
    render(){
        return(
            <>
               <h3>Welcome</h3> 
               <div className="container">
                Welcome {this.props.match.params.name} !!
                You can manage your todos <Link to="/todos">here</Link>
                </div>

                <div className="container">
                Customize your welcome message <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>here</button>
                 </div>
            </>
            
        )
    }
}

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn)
        return(
           <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                   <div><a className="navbar-brand" href="https://www.linkedin.com/in/karanvir-singh-sidhu/">Karanvir</a></div>
                   <ul className="navbar-nav">
                       {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/Marshal">Home</Link></li>}
                       {isUserLoggedIn && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
                   </ul>
                   <ul className="navbar-nav navbar-collapse justify-content-end">
                       {!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                       {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
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




export default TodoApp