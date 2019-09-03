import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

  backGround: {
    position: 'absolute',
    left: '10.73%',
    right: '65.1%',
    top: '11.85%',
    bottom: '69.48%',

    width: 232,
    height: 252,

    background: '#FFFFFF',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  header: {
    marginRight: 20,
    marginTop: 20,
    marginLeft: 20,

    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '12px',

    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: '#4A4A4A',
  },
  checkbox: {
    border: '1px solid #2196F3',
    boxSizing: 'border-box',
    borderRadius: '2px',
  },

});

export default function Filtres() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.backGround}>
        <p className={classes.header}>Количество пересадок</p>
        <label>
          <input className={classes.checkbox} type={'checkbox'} /> Все
        </label><br />
        <label>
          <input type={'checkbox'} /> Без пересадок
        </label><br />
        <label>
          <input type={'checkbox'} /> 1 пересадка
        </label><br />
        <label>
          <input type={'checkbox'} /> 2 пересадки
        </label><br />
        <label>
          <input type={'checkbox'} /> 3 пересадки
        </label>
      </div>
    </div>
  );
}