import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '500px',
    width: '100%'
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class MessageForm extends React.Component {
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
        <Typography variant='h5' component='h1'>
          Send a Message
        </Typography>
        <Paper className={classes.root} elevation={1}>
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
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageForm);
