import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './reducers/counter';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  count: state.counter
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement
}, dispatch)

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          count: {props.count}
        </p>
        <p>
          <a href="/" onClick={(ev) => {
            ev.preventDefault();
            props.increment();
          }}>
            +
          </a>
          {' / '}
          <a href="/" onClick={(ev) => {
            ev.preventDefault();
            props.decrement();
          }}>
            -
          </a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
});

export default App;
