import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            welcomeMsg : ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }
    retrieveWelcomeMessage(){
       // console.log('retrieve')
       HelloWorldService.executeHelloWorldService()
       //.then(response=>console.log(response))
       .then(response => this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse(response){
            console.log(response)
            this.setState({welcomeMsg: response.data.msg})
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

                 <div className="container">
                        {this.state.welcomeMsg}
                 </div>
            </>
            
        )
    }
}

export default WelcomeComponent