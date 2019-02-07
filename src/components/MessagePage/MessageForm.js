import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import { connect } from 'react-redux';
import { handleChange } from '../../store/actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class MessageForm extends React.Component {
  handleDelete = data => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { classes, group, event, messageBody } = this.props;
    return (
      <div>
        <Typography variant='h5' component='h1'>
          Send a Message
        </Typography>
        <Paper className={classes.root} elevation={1}>
          <Typography variant='h5' component='h3'>
            Who do you want to send it to?
          </Typography>
          <Typography component='p'>Select a contact:</Typography>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Event</InputLabel>
            <Select
              value={event}
              onChange={this.props.handleChange}
              input={<FilledInput name='event' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {/* map through event array here to <MenuItem /> */}
            </Select>
          </FormControl>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Group</InputLabel>
            <Select
              value={group}
              onChange={this.props.handleChange}
              input={<FilledInput name='group' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {/* map through group array here  */}
              {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>

          <form
            className={classes.container}
            noValidate
            autoComplete='off'
            onSubmit={this.handleSubmit}
          >
            <TextField
              id='outlined-multiline-static'
              label='Message'
              multiline
              rows='4'
              className={classes.textField}
              margin='normal'
              variant='outlined'
              fullWidth
              name='messageBody'
              value={messageBody}
              onChange={this.props.handleChange}
              required
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Send
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
            <Button variant='contained' className={classes.button}>
              Reset
            </Button>
          </form>
          {/* <h2>
            Post request that will be sent out to mentors, individual, cohort or
            by a certain group. add response back to message array of objects
            and list them in the front page from the most recent. limit to 3-5
          </h2> */}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.messages.group,
  event: state.messages.event,
  messageBody: state.messages.messageBody
});

export default connect(
  mapStateToProps,
  { handleChange }
)(withStyles(styles)(MessageForm));
