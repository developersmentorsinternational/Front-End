import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,

    maxWidth: '1000px',
    width: '100%'
  }
});

const MessageList = props => {
  const { classes, message } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='h5' component='h3'>
          {message.created}
        </Typography>
        <Typography component='p'>{message.name}</Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(MessageList);

/*



message: [
  group:
  body:
  created:
]


group: [
  {
    name: 'the boyz',
    members: [
      {
        name: 'cj tantay'
        number: 818-304-1213
      },
      {
        name: 'cj tantay'
        number: 818-304-1213
      },
      {
        name: 'cj tantay'
        number: 818-304-1213
      },
      
    ]
  },
  {
    name: 'lambda staff',
    members: [
      {
        name: 'cj tantay'
        number: 818-304-1213
      },
      {
        name: 'cj tantay'
        number: 818-304-1213
      },
      {
        name: 'cj tantay'
        number: 818-304-1213
      },
      {
        name: 'cj tantay'
        number: 818-304-1213
      }
    ]
  }

]



*/
