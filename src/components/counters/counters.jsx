import React, { Component } from 'react';
import Counter from '../counter/counter';

import './counters.css';

class Counters extends Component {

  render() {
    const {counters, onDelete, onIncrease, onDecrease, onReset} = this.props
    return (
      <div>
        { counters.map(counter => 
          <Counter key={ counter.id } 
          counter={ counter } 
          onDelete={ onDelete }
          onIncrease={ onIncrease }
          onDecrease={ onDecrease }
          >
            {/* example of child props */}
            <h4>{ counter.title }</h4>
          </Counter>
          ) 
        }
        <button className="reset_button" onClick={ onReset }>Reset All</button>
      </div>
    );
  }
}

export default Counters;
