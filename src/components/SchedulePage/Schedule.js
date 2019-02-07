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

  return <div className={classes.root}>{schedule.messageBody}</div>;
};

export default withStyles(styles)(Schedule);
