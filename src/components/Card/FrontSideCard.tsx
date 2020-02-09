import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
import mcLogo from 'static/logo_mc.png';

const useStyles = makeStyles({
  frontSide: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
  },
  mcLogo: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '55px',
    height: '36px',
  },
  dateField: {
    marginTop: 'auto',
  },
  cardNumber: {
    marginTop: '40px',
  },
});

export const FrontSideCard = () => {
  const styles = useStyles();

  return (
    <div className={styles.frontSide}>
      <img src={mcLogo} alt="Master Card" className={styles.mcLogo} />
      <TextField
        placeholder="0000 0000 0000 0000"
        label="Номер карты*"
        name="cardNumber"
        InputLabelProps={{
          shrink: true,
        }}
        className={styles.cardNumber}
      />

      <TextField placeholder="02/01" className={styles.dateField} />
    </div>
  );
};
