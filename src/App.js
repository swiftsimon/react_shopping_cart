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
