import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './counter.css'

class Counter extends Component{
    
    constructor(){      //initiate state
        super();    //to use this we need to use super otherwise there will be an error 
        this.state={
            counter : 0
        }

        this.increment = this.increment.bind(this); //binding the method to the class
        this.decrement = this.decrement.bind(this); 
        this.reset = this.reset.bind(this); 
    }

    increment(by){
         console.log(`increment from child -${by}`)
       // this.state.counter++;
        this.setState(
            () => {  //actually a merge to an existing state
                return {counter: this.state.counter + by}
            }
        );
     }

     decrement(by){
        console.log(`decrement from child -${by}`)
      // this.state.counter++;
       this.setState(
           () => {  //actually a merge to an existing state
               return {counter: this.state.counter - by}
           }
       );
    }

    reset(){
        this.setState(
            () => {  //actually a merge to an existing state
                return {counter: 0}
            }
        );
    }
    
    render() {
        return (
            <div className="Counter">
              <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement} /> 
              <CounterButton by={5} incrementMethod = {this.increment} decrementMethod = {this.decrement} /> 
              <CounterButton by={10} incrementMethod = {this.increment} decrementMethod = {this.decrement} /> 
              <span className="count">{this.state.counter}</span>
             <div> <button className="reset" onClick= {this.reset}>Reset</button> </div>
            </div>
          );
    }
}


export  class CounterButton extends Component {

    constructor(){      //initiate state
        super();    //to use this we need to use super otherwise there will be an error 
        this.state={
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this); //binding the method to the class
    }


    render() {
        return (
            <div className="counter">
                <button onClick={this.increment} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
               
            </div>
          );
    }

   increment(){
     // console.log('increment')
    // this.state.counter++;
     this.setState(
         () =>   {  //actually a merge to an existing state
         return {counter: this.state.counter + this.props.by}
        });
     this.props.incrementMethod(this.props.by)
  }

  decrement(){
    // console.log('increment')
   // this.state.counter++;
  {/*} this.setState(
        () =>   {  //actually a merge to an existing state
            return {counter: this.state.counter - this.props.by}
        }
    );  */}
    this.props.decrementMethod(this.props.by);

 }
}

CounterButton.defaultProps ={
    by:1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter