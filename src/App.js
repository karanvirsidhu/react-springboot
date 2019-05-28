import React, {Component} from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        
        <TodoApp />
      </div>
    );
  }
}

  // Component name should start with upper case
 class LearningComponent extends Component{
   render(){
    return (
      <div className="learningComponent">
        My first react application
        <FirstComponent />
        
      </div>
    );
   }
 }
export default App;
