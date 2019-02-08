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
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'spaceBetween'
  },
  message: {
    borderRight: '1px solid black'
  },
  schedule: {},
  fab: {
    textAlign: 'center',
    border: '1px solid red'
  },
  fabContainer: {
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  }
});

const HomePageView = props => {
  const { classes, messages, schedules } = props;

  return (
    <div>
      <Typography variant='h5' component='h1'>
        Dashboard
      </Typography>
      {/* <div className={classes.fabContainer}>
        <Fab color='secondary' aria-label='Add' className={classes.fab}>
          <AddIcon />
        </Fab>
      </div> */}

      {schedules.length === 0 && messages.length === 0 ? (
        <div className={classes.root}>
          <h2>No activity</h2>
        </div>
      ) : (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.message}>
              {messages.length === 0 ? (
                <div className={classes.noActivity}>
                  <h2>No recent messages</h2>
                </div>
              ) : (
                messages.map((message, i) => (
                  <MessageList message={message} key={i} />
                ))
              )}
            </div>
            <div className={classes.schedule}>
              {schedules.length === 0 ? (
                <div className={classes.noActivity}>
                  <h2>No active schedules</h2>
                </div>
              ) : (
                schedules.map((schedule, i) => (
                  <ScheduleList schedule={schedule} key={i} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state.messages.messages,
  schedules: state.schedules.schedules
});

export default withStyles(styles)(connect(mapStateToProps)(HomePageView));
