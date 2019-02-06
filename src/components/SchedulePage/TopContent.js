import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
});

const TopContent = props => {
  const { classes } = props;
  return (
    <div>
      <Link to='/dashboard/schedule/add-form'>
        <Fab color='primary' aria-label='Add' className={classes.fab}>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default withStyles(styles)(TopContent);
