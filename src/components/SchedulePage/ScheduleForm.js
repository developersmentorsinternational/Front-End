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
  FilledInput
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '500px',
    width: '100%',
    margin: '0 auto'
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class ScheduleForm extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' }
    ]
  };

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
  render() {
    const { classes, event, group } = this.props;
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
          <form className={classes.container} noValidate autoComplete='off'>
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
            />
            <TextField
              id='datetime-local'
              label='Pick a date'
              type='datetime-local'
              defaultValue='2017-05-24T10:30'
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              required
            />
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
  messageBody: state.schedules.messageBody
});

export default connect(mapStateToProps)(withStyles(styles)(ScheduleForm));
