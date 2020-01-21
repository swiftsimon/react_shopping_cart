import React, { Component } from 'react';
import Counter from '../counter/counter';

import './counters.css';

class Counters extends Component {

  render() {
    return (
      <div>
        { this.props.counters.map(counter => 
          <Counter key={ counter.id } 
          counter={ counter } 
          onDelete={ this.props.onDelete }
          onIncrease={ this.props.onIncrease }
          onDecrease={ this.props.onDecrease }
          >
            {/* example of child props */}
            <h4>{ counter.title }</h4>
          </Counter>
          ) 
        }
        <button className="reset_button" onClick={ this.props.onReset }>Reset All</button>
      </div>
    );
  }
}

export default Counters;
