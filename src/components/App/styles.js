import injectSheet from 'react-jss';

export default injectSheet({
  '@global': {
    body: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      fontFamily: 'Roboto',
    },
    'input, button, optgroup, select, textarea': {
      fontFamily: 'Roboto',
    },
    'html, body': {
      boxSizing: 'border-box',
    },
    'body *, body *:before, body *:after': {
      boxSizing: 'inherit',
    },
  },
});
