import React from 'react';
import {
  Paper,
  TextField,
  Button,
  Icon,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FilledInput,
  OutlinedInput
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import {
  handleScheduleChange,
  handleBodyChange,
  setGroupEvent
} from '../../store/actions';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '700px',
    width: '100%',
    margin: '0 auto'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  hello: {}
});

class ScheduleForm extends React.Component {
  state = {
    selectedDate: new Date(),
    labelWidth: 0,
    event: '',
    group: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date }, () =>
      console.log(this.state.selectedDate)
    );
  };
  handleBodyChange = e => {
    this.props.handleBodyChange(e.target.name, e.target.value);
    console.log(this.props);
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

  handleScheduleChange = e => {
    console.log(
      '%c from scheduleform ',
      'color: red',
      e.target.name,
      e.target.value
    );
    this.props.handleScheduleChange(
      e.target.name,
      e.target.value,
      this.props.messageBody
    );
  };

  render() {
    const {
      classes,
      event,
      group,
      dayOfTheMonth,
      month,
      dayOfTheWeek,
      messageBody
    } = this.props;
    const { selectedDate } = this.state;

    return (
      <div>
        <Paper className={classes.root}>
          {/* <h2>
            This is a typical crud app. Schedule List, every card is dynamically
            routed, you can edit them individually based on id. Post Request ->
            response to the schedules array in the store and list in the
            homepage by what's coming in first.
          </h2> */}
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
              {this.props.events.length === 0
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
              required
              name='messageBody'
              value={messageBody}
              onChange={this.handleBodyChange}
            />
            {this.props.isUpdating ? (
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Typography>Pick a recurring date:</Typography>

                  <TimePicker
                    ampm={false}
                    seconds
                    format='HH:mm:ss'
                    value={selectedDate}
                    onChange={this.handleDateChange}
                  />
                </MuiPickersUtilsProvider>

                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel htmlFor='outlined-age-simple'>
                    Day of the Month
                  </InputLabel>
                  <Select
                    value={dayOfTheMonth}
                    onChange={this.handleScheduleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name='dayOfTheMonth'
                        id='outlined-age-simple'
                      />
                    }
                  >
                    <MenuItem value='31'>31</MenuItem>
                    <MenuItem value='30'>30</MenuItem>
                    <MenuItem value='29'>29</MenuItem>
                    <MenuItem value='28'>28</MenuItem>
                    <MenuItem value='27'>27</MenuItem>
                    <MenuItem value='26'>26</MenuItem>
                    <MenuItem value='25'>25</MenuItem>
                    <MenuItem value='24'>24</MenuItem>
                    <MenuItem value='23'>23</MenuItem>
                    <MenuItem value='22'>22</MenuItem>
                    <MenuItem value='21'>21</MenuItem>
                    <MenuItem value='20'>20</MenuItem>
                    <MenuItem value='19'>19</MenuItem>
                    <MenuItem value='18'>18</MenuItem>
                    <MenuItem value='17'>17</MenuItem>
                    <MenuItem value='16'>16</MenuItem>
                    <MenuItem value='15'>15</MenuItem>
                    <MenuItem value='14'>14</MenuItem>
                    <MenuItem value='13'>13</MenuItem>
                    <MenuItem value='12'>12</MenuItem>
                    <MenuItem value='11'>11</MenuItem>
                    <MenuItem value='10'>10</MenuItem>
                    <MenuItem value='9'>09</MenuItem>
                    <MenuItem value='8'>08</MenuItem>
                    <MenuItem value='7'>07</MenuItem>
                    <MenuItem value='6'>06</MenuItem>
                    <MenuItem value='5'>05</MenuItem>
                    <MenuItem value='4'>04</MenuItem>
                    <MenuItem value='3'>03</MenuItem>
                    <MenuItem value='2'>02</MenuItem>
                    <MenuItem value='1'>01</MenuItem>
                    <MenuItem value='*'>
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel htmlFor='outlined-age-simple'>Month</InputLabel>
                  <Select
                    value={month}
                    onChange={this.handleScheduleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name='month'
                        id='outlined-age-simple'
                      />
                    }
                  >
                    <MenuItem value='12'>December</MenuItem>
                    <MenuItem value='11'>November</MenuItem>
                    <MenuItem value='10'>October</MenuItem>
                    <MenuItem value='9'>September</MenuItem>
                    <MenuItem value='8'>August</MenuItem>
                    <MenuItem value='7'>July</MenuItem>
                    <MenuItem value='6'>June</MenuItem>
                    <MenuItem value='5'>May</MenuItem>
                    <MenuItem value='4'>April</MenuItem>
                    <MenuItem value='3'>March</MenuItem>
                    <MenuItem value='2'>February</MenuItem>

                    <MenuItem value='1'>January</MenuItem>

                    <MenuItem value='*'>
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant='outlined' className={classes.formControl}>
                  <InputLabel htmlFor='outlined-age-simple'>
                    Day of the week
                  </InputLabel>
                  <Select
                    value={dayOfTheWeek}
                    onChange={this.handleScheduleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name='dayOfTheWeek'
                        id='outlined-age-simple'
                      />
                    }
                  >
                    <MenuItem value='6'>Saturday</MenuItem>
                    <MenuItem value='5'>Friday</MenuItem>
                    <MenuItem value='4'>Thursday</MenuItem>
                    <MenuItem value='3'>Wednesday</MenuItem>
                    <MenuItem value='2'>Tuesday</MenuItem>
                    <MenuItem value='1'>Monday</MenuItem>
                    <MenuItem value='0'>Sunday</MenuItem>
                    <MenuItem value='*'>
                      <em>None</em>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            ) : null}

            <br />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
            >
              Schedule
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>

            <Button variant='contained' className={classes.button}>
              Reset
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.schedules.group,
  event: state.schedules.event,
  messageBody: state.schedules.messageBody,
  dayOfTheWeek: state.schedules.date.dayOfTheWeek,
  dayOfTheMonth: state.schedules.date.dayOfTheMonth,
  month: state.schedules.date.month,
  date: state.schedules.date,
  events: state.messages.events,
  groups: state.messages.group,
  isUpdating: state.schedules.isUpdating
});

export default connect(
  mapStateToProps,
  { handleScheduleChange, handleBodyChange, setGroupEvent }
)(withStyles(styles)(ScheduleForm));
