import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto'
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

const ScheduleForm = props => {
  const { classes } = props;
  return (
    <div>
      <Typography variant='h5' component='h1'>
        Add a Scheduled Message
      </Typography>
      <Paper className={classes.root}>
        <h2>
          This is a typical crud app. Schedule List, every card is dynamically
          routed, you can edit them individually based on id. Post Request ->
          response to the schedules array in the store and list in the homepage
          by what's coming in first.
        </h2>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ScheduleForm);
