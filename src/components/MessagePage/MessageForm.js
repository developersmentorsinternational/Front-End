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
import { handleMessageChange } from '../../store/actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  button: {
    backgroundColor: '#00AFC1'
  },

  reset: {
    backgroundColor: 'white',
    marginLeft: '10px'
  }
});

class MessageForm extends React.Component {
  state = {
    event: '',
    group: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // let date = `${this.state.selectedDate}`;
    // let newDate = date.match(/\d+(?=:)/gi);
    // const hour = newDate[0];
    // const minute = newDate[1];
    // console.log(this.props.event, this.props.group);
    this.props.setGroupEvent(
      this.state.event,
      this.state.group,
      this.props.messageBody
    );
  };

  handleMessageChange = e => {
    this.props.handleMessageChange(e.target.name, e.target.value);
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
              value={this.state.event}
              onChange={this.handleChange}
              input={<FilledInput name='event' id='filled-age-simple' />}
            >
              <MenuItem value='' className={classes.hello}>
                <em>None</em>
              </MenuItem>
              {/* changed the boolean to false for now since I don't think this component will ever be in use */}
              {!this.props.events.length === 0
                ? null
                : this.props.events.map(event => (
                    <MenuItem value={event.id} key={event.id}>
                      {`${event.name} start date: ${event.start}`}
                    </MenuItem>
                  ))}
              {/* map through event array here to <MenuItem /> */}
            </Select>
          </FormControl>
          <FormControl variant='filled' className={classes.formControl}>
            <InputLabel htmlFor='filled-age-simple'>Group</InputLabel>
            <Select
              value={this.state.group}
              onChange={this.handleChange}
              input={<FilledInput name='group' id='filled-age-simple' />}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {this.props.groups.length === 0
                ? null
                : this.props.groups.map(group => (
                    <MenuItem value={group.id} key={group.id}>
                      {group.name}
                    </MenuItem>
                  ))}
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
            <Button
              variant='contained'
              className={classes.reset + classes.button}
            >
              Reset
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.messages.group,
  event: state.messages.event,
  messageBody: state.messages.messageBody,
  events: state.messages.events,
  groups: state.messages.group
});

export default connect(
  mapStateToProps,
  { handleMessageChange }
)(withStyles(styles)(MessageForm));
