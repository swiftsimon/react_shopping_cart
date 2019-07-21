import React, { Component } from 'react';
import './counter.css';


class Counter extends Component {

  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <span className={ this.getOutputClasses() }>{ this.getCountBadge() }</span>
        <button className="button_small add">+</button>
        <button className="button_small remove">-</button>
      </div>

    );
  }

  getCountBadge() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getOutputClasses() {
    let classes = 'output_text ';
    return classes += this.state.count === 0 ? 'warning' : ''; 
  }


}

export default Counter;