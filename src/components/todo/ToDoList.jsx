import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'

import AuthenticationService from '../todo/AuthenticationService.js'

class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state ={
            todo :  [
                // {id : 1, description : "Learn React" , status: true, targetDate : new Date()},
                // {id : 2, description : "Get a job", status: false, targetDate : new Date()},
                // {id : 3, description : "Buy Range Rover", status: false, targetDate : new Date()}
            ], message : null 
                
        }
        this.deleteTodo =this.deleteTodo.bind(this);
    }

    componentDidMount(){
        this.refreshTodos()
    }

    refreshTodos(){
        let username = AuthenticationService.LoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
              console.log(response)
             this.setState({
                 todo: response.data
            })
        })
    }

    deleteTodo(id){
        let username = AuthenticationService.LoggedInUsername()
        console.log(id + " "+ username)
        TodoDataService.deleteTodo(username,id)
        .then(response => {
           // console.log(response)
           this.setState ({ message: `Delete of todo ${id} is successful.`})
           this.refreshTodos()
        }) 
    }




    render(){
        return(
            <div>
                <h1>To Do List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
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
                                    <td>{todo.done.toString()}</td>   
                                    <td>{todo.targetDtae.toString()}</td>      
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>                                                              
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList;