import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ToDoList from './ToDoList.jsx'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

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