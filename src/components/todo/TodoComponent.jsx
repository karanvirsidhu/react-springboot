

import React,{Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from '../todo/AuthenticationService.js'

class TodoComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.match.params.id,
            description : 'Learn Salsa',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this)
    }

    validate(values){
            let errors ={}

            if(!values.description){
                errors.description = 'enter a description'
            }
            else if(values.description.length < 5){
                errors.description = 'enter atleast 5 characters in description'
            }

            if(!moment(values.targetDate).isValid()){
                errors.targetDate = "enter a valid target date"
            }
            return errors
    }
    
    onSubmit(values){
          //  console.log(values)
          let username = AuthenticationService.LoggedInUsername()
          if(this.state.id===-1){
            TodoDataService.createTodo(username, {
                id: this.state.id,
                description : values.description,
                targetDate: values.targetDate
            }).then(() => {this.props.history.push(`/todos`)})
          }
          else{
            TodoDataService.updateTodo(username, this.state.id, {
                id: this.state.id,
                description : values.description,
                targetDate: values.targetDate
            }).then(() => {this.props.history.push(`/todos`)})
          }
          
          
          
    }

    componentDidMount(){

        if(this.state.id===-1){
            return 
        }
        let username = AuthenticationService.LoggedInUsername()
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => this.setState({
            description : response.data.description,
            targetDate : moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    render(){

        let description =this.state.description
        let targetDate = this.state.targetDate
        return(
            <div>
                <h1>Todo component for id </h1>
                <div className="container">
                    <Formik
                        initialValues ={{
                            description: description,
                            targetDate: targetDate}}
                        
                        validateOnChange ={false}
                        validateOnBlur={false}
                        validate= {this.validate} 
                        enableReinitialize={true}
                        onSubmit={this.onSubmit}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name ="description" component="div"
                                            className="alert alert-warning" />
                                    <ErrorMessage name ="targetDate" component="div"
                                            className="alert alert-warning" />
                                    <fieldset classNsame="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name= "description" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name= "targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>   
                            )       
                        }
                    </Formik>

                </div>
                
            </div>
        )
    }

}

export default TodoComponent