const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const increment = () => dispatch => {
  dispatch({type: 'INCREMENT'});
};

export const decrement = () => dispatch => {
  dispatch({type: 'DECREMENT'});
};

export default counter;