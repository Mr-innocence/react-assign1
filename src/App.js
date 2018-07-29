import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user';

class App extends Component {
  state = {
    userState:[
      {userName: "JZ", snake : ""}
    ]
  }

  inputHandler = (event) =>{
    this.setState({
      userState: [
        {userName: event.target.value, snake: this.state.userState[0].snake}
      ]    
    })
  }

  inputHandler2 = (newSnake) =>{
    console.log("input2 has been changed")
    this.setState({
      userState: [
        {userName:this.state.userState[0].userName ,snake: newSnake}
      ]    
    })
  }

  render() {
    const style = {
      backgroundColor: 'Red'      
    }


    return (
      <div className="APP">
        <button style = {style}>Submit</button>
        <User
          userName = {this.state.userState[0].userName}
          snake = {this.state.userState[0].snake}
          inputChange = {this.inputHandler}
          inputChange2 = {this.inputHandler2.bind(this, 'lalal')}
        />
      </div>
    );
  }
}

export default App;
