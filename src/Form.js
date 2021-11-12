import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      input: '',
      operation: '',
    }
  }

  // for handling form input & operation change input:
  handleInputChange=(event)=>{
    console.log(event.target.value) // to see the input in console as you type
    this.setState({
      input: event.target.value,
    })
  }
  handleOperationChange=(event)=>{
    this.setState({
      operation: event.target.value,
    })
  }

  // helper method:
  // Accumulator pattern to find our `sum`:
  calcSum=(arr)=>{
    let sum = 0;
    for(let num of arr){
      sum += num;
    }
    return sum;
  }


  // for calculate button:
  handleSubmit=(event)=>{
    event.preventDefault();
    // make input an array of strings:
    // let strArr = this.state.input.split(",").map((str)=>Number(str));
    let strArr = this.state.input.split(",");
    let numArr = strArr.map((str)=>Number(str));

    console.log(this.state.input)

    // for the currently selected operation:
    let result = 0;

    switch (this.state.operation) {
      case "sum":
        let result = this.calcSum(numArr) // add our numArr value to this function
        break;
      case "average":
        let result= this.calcSum(numArr)/numArr.length;
        break;
      case "mode":
        console.log("Calculate Mode");
        break;
      default:
        console.log("Nothing Selected.")
        break;
    }
    console.log(result)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          id="values" 
          name="values" 
          type="text" 
          value={this.state.input}
          onInput={this.handleInputChange}
        />
        <select 
          id="operation" 
          name="operation"
          value={this.state.operation}
          onChange={this.handleOperationChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;