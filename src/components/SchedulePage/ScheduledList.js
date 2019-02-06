import React from 'react';
import { Paper } from '@material-ui/core';
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
  }
});

const ScheduledList = props => {
  const { classes, schedules } = props;
  return (
    <div>
      {schedules.map(schedule => (
        <Schedule schedule={schedule} key={schedule.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  schedules: state.schedules.schedule
});

export default withStyles(styles)(connect(mapStateToProps)(ScheduledList));
