import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    marginLeft: '10px',
    paddingLeft: '10px',
    borderRadius: '3px',
    height: '25px'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {props.isLogginSuccess ? (
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Typography variant='h6' color='inherit' className={classes.grow}>
              Mentor's International Training Reminders
            </Typography>
          )}

          {props.isLogginSuccess ? null : (
            <form className={classes.form}>
              <input
                type='email'
                placeholder='Email'
                required
                className={classes.input}
              />
              <input
                type='password'
                placeholder='Password'
                required
                className={classes.input}
              />
              <Button type='submit' color='inherit'>
                Login
              </Button>
            </form>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
