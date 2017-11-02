import injectSheet from 'react-jss';

export default injectSheet({
  dashboard: {
    position: 'absolute',
    left: '200px',
    top: 0,
    right: 0,
    bottom: 0,
    padding: '0 24px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerContainer: {
    width: 'calc(100% - 350px)',
    minWidth: '200px',
  },
  dateContainer: {
    minWidth: '336px',
  }
});
