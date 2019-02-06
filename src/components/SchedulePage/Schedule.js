import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Fab,
  Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

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
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.topContent}>
            <Typography className={classes.heading}>
              {schedule.subject}
            </Typography>
            <Typography className={classes.heading2}>
              {schedule.date}
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.heading}>{schedule.to}</Typography>
          <Typography>{schedule.body}</Typography>
          <Fab
            color='secondary'
            aria-label='Edit'
            className={classes.fab}
            size='small'
          >
            <Icon>edit_icon</Icon>
          </Fab>

          <Fab
            disabled
            aria-label='Delete'
            className={classes.fab}
            size='small'
          >
            <DeleteIcon />
          </Fab>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(Schedule);
