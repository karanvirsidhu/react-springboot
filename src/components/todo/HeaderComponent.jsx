import React, {Component} from 'react';
import {withRouter} from 'react-router';


import {Link} from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js';
import {Route, Redirect} from 'react-router-dom';

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

export default withRouter(HeaderComponent)