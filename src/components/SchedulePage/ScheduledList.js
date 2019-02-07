import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Schedule from './Schedule';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  },
  noActivity: {
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  }
});

const ScheduledList = props => {
  const { classes, schedules } = props;

  if (schedules.length === 0) {
    return (
      <div className={classes.noActivity}>
        <h2>No active schedules</h2>
      </div>
    );
  }
  return (
    <div>
      {schedules.map(schedule => (
        <Schedule schedule={schedule} key={schedule.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  schedules: state.schedules.schedules
});

export default withStyles(styles)(connect(mapStateToProps)(ScheduledList));
