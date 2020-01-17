import React, { Component } from 'react';
import './counter.css';


class Counter extends Component {

  state = {
    value: this.props.counter.value,
  }

  render() {

    return (
      <div>
        { this.props.children }
        <div className={ this.getOutputClasses() }>{ this.getValueBadge() }</div>
        <button className="button button_small add" onClick={ this.handleIncrease}>+</button>
        <button className="button button_small remove" onClick={this.handleDecrease}>-</button>
        <button className="button button_med delete" onClick={() => this.props.onDelete(this.props.counter.id)}>delete</button>
      </div>

    );
  }

  getValueBadge() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getOutputClasses() {
    let classes = 'output_text ';
    return classes += this.state.value === 0 ? 'warning' : ''; 
  }

  handleIncrease = () => {
    this.setState({ value: this.state.value + 1 })
  }

  handleDecrease = () => {
    if (this.state.value === 0) return
    this.setState({ value: this.state.value - 1 })
  }

}

export default Counter;