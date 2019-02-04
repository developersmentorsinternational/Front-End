import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function SignupForm(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='firstname'>First Name</InputLabel>
            <Input
              id='firstname'
              name='firstname'
              autoComplete='firstname'
              autoFocus
              value=''
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='lastname'>Last Name</InputLabel>
            <Input
              id='lastname'
              name='lastname'
              autoComplete='lastname'
              value=''
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input id='email' name='email' autoComplete='email' />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='lastname'>Phone Number</InputLabel>
            <Input
              type='tel'
              id='phone'
              name='phone'
              autoComplete='phone'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              required
              placeholder='123-456-7890'
              value=''
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
            <Input
              name='confirmPassword'
              type='password'
              id='confirmPassword'
              value=''
            />
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </main>
  );
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignupForm);
