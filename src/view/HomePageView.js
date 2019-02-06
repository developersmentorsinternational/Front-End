import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { MessageList } from '../components/Dashboard/MessageList';
import { ScheduleList } from '../components/Dashboard/SchedulesList';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceAround'
  },
  message: {
    borderRight: '1px solid black'
  },
  schedule: {}
});

const HomePageView = props => {
  const { classes, messages, schedules } = props;
  return (
    <div>
      <Typography variant='h5' component='h1'>
        Dashboard
      </Typography>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.message}>
            {messages.map(message => (
              <MessageList message={message} key={message.id} />
            ))}
          </div>
          <div className={classes.schedule}>
            {schedules.map(schedule => (
              <ScheduleList schedule={schedule} key={schedule.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
  schedules: state.schedules.schedule
});

export default withStyles(styles)(connect(mapStateToProps)(HomePageView));
