import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    maxWidth: '800px',
    paddingBottom: '5px',
    width: '100%',
    margin: '0 auto'
  },
  topContent: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    flexDirection: 'row'
  },
  heading2: {
    fontWeight: '800',
    paddingLeft: '5px'
  }
});

const Schedule = props => {
  const { classes, schedule } = props;

  return <div className={classes.root}>{schedule.messageBody}</div>;
};

export default withStyles(styles)(Schedule);
