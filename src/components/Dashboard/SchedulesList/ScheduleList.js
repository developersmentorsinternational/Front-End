import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    maxWidth: '1000px',
    width: '100%'
  }
});

const ScheduleList = props => {
  const { classes, schedule } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='h5' component='h3'>
          {schedule.name}
        </Typography>
        <Typography component='p'>{schedule.start}</Typography>

        <Typography component='p'>{schedule.created}</Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ScheduleList);
