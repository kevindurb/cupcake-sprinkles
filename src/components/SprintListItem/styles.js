import injectSheet from 'react-jss';

export default injectSheet({
  item: {
    borderBottom: '1px solid lightgray',
    padding: '8px',
  },
  timeContainer: {
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '8px',
  },
  time: {
    display: 'inline-block',
  },
  selected: {
    borderRight: '3px solid cornflowerblue',
  },
});
