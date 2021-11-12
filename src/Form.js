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

  // if it's in the object, do this. Else, if it's not in the object, do that.
  // number of occurrences of each number
  // {
  //   1: 10,
  //   3: 6,
  //   9: 12
  // }
  // countObj[num] - (countObj[num] || 0) + 1; // short-circuiting (if you understand this)
  calcMode=(arr)=>{
    let countObj = {};
    for (let num of arr) {
      if (countObj[num]) {
        countObj[num] = countObj[num] + 1;
      } else {
        countObj[num] = 1;
      }
    }
    console.log(countObj)
    let keys = Object.keys(countObj);
    let highestValue = 0;
    let highestKey;

    for (let key of keys) {
      if (countObj[key] > highestValue) {
        highestValue = countObj[key];
        highestKey = key;
      }
    }
    console.log(highestKey);

    // console.log(countObj)
    // console.log(Object.keys(countObj))
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
        let sumResult = this.calcSum(numArr) // add our numArr value to this function
        break;
      case "average":
        let avgResult= this.calcSum(numArr)/numArr.length;
        break;
      case "mode":
        result = this.calcMode(numArr)
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