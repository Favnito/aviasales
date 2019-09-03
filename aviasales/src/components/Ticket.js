import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  background: {
    position: 'absolute',
    left: '355px',
    right: '103px',
    top: '230px',
    bottom: '936px',
    background: '#FFFFFF',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
});

export default function Ticket() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      билет
    </div>
  );
}