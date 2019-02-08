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
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%'
  },
  heading: {
    fontWeight: '800',
    paddingLeft: '5px',
    width: '125px'
  },

  fab: {
    backgroundColor: '#4f5b62',
  },

  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    marginLeft: '10px'
  },

  expansionPanel: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const Schedule = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <div className={classes.topContent}>
            <Typography className={classes.heading}>
              schedule dot subject
            </Typography>
            <Typography className={classes.heading2}>schedule date</Typography>
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <Typography className={classes.heading}>
            To a group or something
          </Typography>

          <div className={classes.icons}>
            <Typography className={classes.text}>body message</Typography>

            <div>
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
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(Schedule);
