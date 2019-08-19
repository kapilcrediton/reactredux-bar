import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './reducers/counter';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { turnOn, turnOff } from './reducers/toggler';

const mapStateToProps = (state) => ({
  count: state.counter,
  toggle: state.toggler
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement,
  turnOff,
  turnOn
}, dispatch)

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            <Link to="/">counter</Link>
            <span>{' | '}</span>
            <Link to="/toggler">toggler</Link>
          </p>

          <Route exact path="/" component={() => <CounterWidget {...props} />} />
          <Route exact path="/toggler" component={() => <TogglerWidget {...props} />} />
        </header>
      </div>
    </Router>
  );
});

const CounterWidget = (props) => {
  return (
    <p>
      count: {props.count}
      <span>{' '}</span>
      <a href="/" style={{color: '#fff'}} onClick={(ev) => {
        ev.preventDefault();
        props.increment();
      }}>
        +
      </a>
      {' / '}
      <a href="/" style={{color: '#fff'}} onClick={(ev) => {
        ev.preventDefault();
        props.decrement();
      }}>
        -
      </a>
    </p>
  );
};

const TogglerWidget = (props) => {
  return (
    <div>
      <a href="/" style={{color: '#fff'}} onClick={(ev) => {
        ev.preventDefault();
        props.toggle === 'on' ? props.turnOff() : props.turnOn();
      }}>
        ō
      </a>
      <span>{' '}</span>
      <div
        className={`App-animated-bg ${props.toggle === 'on' ? 'App-red-bg' : 'App-blue-bg'}`}
        style={{
          width: '100px',
          height: '20px'
        }}
      />
    </div>
  );
};

export default App;
