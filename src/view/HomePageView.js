import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import { MessageList } from '../components/Dashboard/MessageList';
import { ScheduleList } from '../components/Dashboard/SchedulesList';
import AddIcon from '@material-ui/icons/Add';

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
      <Fab color='secondary' aria-label='Add' className={classes.fab}>
        <AddIcon />
      </Fab>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.message}>
            {messages.map((message, i) => (
              <MessageList message={message} key={i} />
            ))}
          </div>
          <div className={classes.schedule}>
            {schedules.map((schedule, i) => (
              <ScheduleList schedule={schedule} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
  schedules: state.schedules.schedules
});

export default withStyles(styles)(connect(mapStateToProps)(HomePageView));
