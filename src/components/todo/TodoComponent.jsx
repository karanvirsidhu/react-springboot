

import React,{Component} from 'react'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from 'formik';

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
            console.log(values)
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
                        onSubmit={this.onSubmit}
                        validateOnChange ={false}
                        validateOnBlur={false}
                        validate= {this.validate} >
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