import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';

import { connect } from 'react-redux';
import { handleChange, register } from '../../store/actions';

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
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  formControl: {
    marginTop: '24px'
  },
  phoneNumber: {
    marginLeft: '20px',
    width: '281px'
  }
});

function SignupForm(props) {
  const handleChange = e => {
    props.handleChange(e.target.name, e.target.value);
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords don't match");
    }
    const user = {
      email,
      firstName,
      lastName,
      password,
      countryCode,
      phoneNumber
    };
    props.register(email, firstName, lastName, password, phoneNumber);
  };

  const {
    classes,
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    password,
    confirmPassword
  } = props;

  console.log(props);

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
        <form className={classes.form} onSubmit={handleRegisterSubmit}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='firstname'>First Name</InputLabel>
            <Input
              id='firstName'
              name='firstName'
              autoComplete='firstname'
              autoFocus
              value={firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='lastname'>Last Name</InputLabel>
            <Input
              id='lastName'
              name='lastName'
              autoComplete='lastname'
              value={lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input
              id='email'
              name='email'
              autoComplete='email'
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <div className={classes.phone}>
            <FormControl className={classes.formControl} disabled>
              <Select
                value={countryCode}
                onChange={handleChange}
                input={<Input name='countryCode' id='name-disabled' />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='1'>+1</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              margin='normal'
              required
              className={classes.phoneNumber}
            >
              <InputLabel htmlFor='phone'> Phone Number</InputLabel>
              <Input
                type='tel'
                id='phone'
                name='phoneNumber'
                autoComplete='phone'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                required
                placeholder='123-456-7890'
                value={phoneNumber}
                onChange={handleChange}
              />
            </FormControl>
          </div>

          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
            <Input
              name='confirmPassword'
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
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
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  countryCode: PropTypes.string
};

const mapStateToProps = state => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  email: state.auth.email,
  phoneNumber: state.auth.phoneNumber,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
  loginEmail: state.auth.loginEmail,
  loginPassword: state.auth.loginPassword,
  countryCode: state.auth.countryCode
});

export default connect(
  mapStateToProps,
  { handleChange, register }
)(withStyles(styles)(SignupForm));
