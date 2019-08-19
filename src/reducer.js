import { combineReducers } from 'redux';
import counter from './reducers/counter';
import toggler from './reducers/toggler';

const app = combineReducers({
  counter,
  toggler
});

export default app;