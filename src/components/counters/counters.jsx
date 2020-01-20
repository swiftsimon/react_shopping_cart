import React, { Component } from 'react';
import Counter from '../counter/counter';

import './counters.css';

class Counters extends Component {

  state = {
    counters: [
      { id: 1, value: 2, title: "Steak" },
      { id: 2, value: 0, title: "Beer" },
      { id: 3, value: 1, title: "Potatoes"},
      { id: 4, value: 4, title: "Salad"}
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c
    });
    this.setState({ counters });
  }

  handleIncrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrease = (counter) => {
    if (counter.value === 0) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        { this.state.counters.map(counter => 
          <Counter key={ counter.id } 
          counter={ counter } 
          onDelete={ this.handleDelete }
          onIncrease={ this.handleIncrease }
          onDecrease={ this.handleDecrease }
          >
            {/* example of child props */}
            <h4>{ counter.title }</h4>
          </Counter>
          ) 
        }
        <button className="reset_button" onClick={ this.handleReset }>Reset All</button>
      </div>
    );
  }
}

export default Counters;
