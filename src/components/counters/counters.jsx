import React, { Component } from 'react';
import Counter from '../counter/counter';

class Counters extends Component {

  state = {
    counters: [
      { id: 1, value: 2, title: "Steak" },
      { id: 2, value: 0, title: "Beer" },
      { id: 3, value: 1, title: "Potatoes"},
      { id: 4, value: 4, title: "Salad"}
    ]
  };

  render() {
    return (
      <div>
        { this.state.counters.map(counter => 
          <Counter key={ counter.id } value={ counter.value } >
            {/* example of child props */}
            <h4>{ counter.title }</h4>
          </Counter>
          ) 
        }
      </div>
    );
  }
}

export default Counters;
