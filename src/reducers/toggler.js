const toggler = (state = 'on', action) => {
  switch (action.type) {
    case 'ON':
      return 'on';
    case 'OFF':
      return 'off';
    default:
      return state;
  }
};

export const turnOn = () => (dispatch) => {
  setTimeout(() => dispatch({type: 'ON'}), 300);
};

export const turnOff = () => (dispatch) => {
  setTimeout(() => dispatch({type: 'OFF'}), 300);
};

export default toggler;