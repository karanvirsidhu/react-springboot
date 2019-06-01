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
            ] 
                
        }
    }

    componentDidMount(){
        let username = AuthenticationService.LoggedInUsername
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
                console.log(response)
        })
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

export default ToDoList;