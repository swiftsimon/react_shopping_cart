import React, {Component} from 'react';
import './App.css';

import Counters from './components/counters/counters';
import Nav from './components/nav/nav';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2, title: "Steak" },
      { id: 2, value: 0, title: "Beer" },
      { id: 3, value: 1, title: "Potatoes"},
      { id: 4, value: 4, title: "Salad"}
    ],
    itemCount: null
  };

  componentDidMount() {
    this.findItemCount()
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(item => item.id !== counterId);
    const currentCounter = this.state.counters.filter(item => item.id === counterId);
    const currentCounterValue = currentCounter[0].value;
    const itemCount = this.state.itemCount - currentCounterValue;
    this.setState({ counters, itemCount });
  }

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c
    });
    this.setState({ counters, itemCount:0 });
  }

  handleIncrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    const itemCount = this.state.itemCount + 1;
    this.setState({ counters, itemCount });
  }

  handleDecrease = (counter) => {
    if (counter.value === 0) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    const itemCount = this.state.itemCount - 1;
    this.setState({ counters, itemCount });
  }

  findItemCount = () => {
    let itemCount = 0;
    this.state.counters.forEach( c => {
      itemCount += c.value;
    })
    this.setState({itemCount})
  }

  render() {
    return (
      <React.Fragment>
        <Nav itemCount={this.state.itemCount}/>
        <Counters 
          counters={this.state.counters}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
