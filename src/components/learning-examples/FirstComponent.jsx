import React, {Component} from 'react';


export default class FirstComponent extends Component {
    render(){
      return (
        <div className="firstComponent">
          First Component
        </div>
      );
    } 
  }

  // Component name should start with upper case
export function SecondComponent() {
    return (
      <div className="secondComponent">
      Second Component
    </div>
    );
  }