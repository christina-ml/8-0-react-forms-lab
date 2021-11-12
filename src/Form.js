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

  render() {
    return (
      <form>
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