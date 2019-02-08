import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: '100%'
  }
});

const ScheduleList = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper>
        <Typography>SCHEDULES</Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ScheduleList);
