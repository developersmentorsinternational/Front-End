import React from 'react';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  }
});

const ScheduledList = props => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root}>testing</Paper>
    </div>
  );
};

export default withStyles(styles)(ScheduledList);
