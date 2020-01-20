import React, { Component } from 'react';
import './counter.css';


class Counter extends Component {
  render() {
    return (
      <div>
        { this.props.children }
        <div className={ this.getOutputClasses() }>{ this.getValueBadge() }</div>
        <button className="button button_small add" onClick={ () => this.props.onIncrease(this.props.counter) }>+</button>
        <button className="button button_small remove" onClick={ () => this.props.onDecrease(this.props.counter)}>-</button>
        <button className="button button_med delete" onClick={() => this.props.onDelete(this.props.counter.id)}>delete</button>
      </div>

    );
  }

  getValueBadge() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getOutputClasses() {
    let classes = 'output_text ';
    return classes += this.props.counter.value === 0 ? 'warning' : ''; 
  }
}

export default Counter;