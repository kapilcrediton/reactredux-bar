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
  setTimeout(() => dispatch({type: 'INCREMENT'}), 300);
};

export const decrement = () => dispatch => {
  setTimeout(() => dispatch({type: 'DECREMENT'}), 300);
};

export default counter;