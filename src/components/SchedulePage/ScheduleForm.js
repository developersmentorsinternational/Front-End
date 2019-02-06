import React from 'react';
import {
  Paper,
  TextField,
  Button,
  Icon,
  Typography,
  Chip
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TagFacesIcon from '@material-ui/icons/TagFaces';

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
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <h2>
            This is a typical crud app. Schedule List, every card is dynamically
            routed, you can edit them individually based on id. Post Request ->
            response to the schedules array in the store and list in the
            homepage by what's coming in first.
          </h2>
          <Typography variant='h5' component='h3'>
            Who do you want to send it to?
          </Typography>
          <Typography component='p'>Select a contact:</Typography>
          <TextField
            id='standard-search'
            label='Search field'
            type='search'
            className={classes.textField}
            margin='normal'
            required
          />

          {this.state.chipData.map(data => {
            let icon = null;

            if (data.label === 'React') {
              icon = <TagFacesIcon />;
            }

            return (
              <Chip
                key={data.key}
                icon={icon}
                label={data.label}
                onDelete={this.handleDelete(data)}
                className={classes.chip}
              />
            );
          })}
          <form className={classes.container} noValidate autoComplete='off'>
            <TextField
              required
              id='outlined-required'
              label='Subject'
              className={classes.textField}
              margin='normal'
              variant='outlined'
              fullWidth
            />
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

export default withStyles(styles)(ScheduleForm);
