import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import mcLogo from 'static/logo_mc.png';
import { ICardProps } from 'pages/ProfilePage/ProfilePage';
import { CustomInput } from 'components/shared';

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

export const FrontSideCard: React.FC<ICardProps> = props => {
  const styles = useStyles();

  return (
    <div className={styles.frontSide} data-testid="front-side">
      <img src={mcLogo} alt="Master Card" className={styles.mcLogo} />
      <Controller
        as={<CustomInput errors={props.errors} />}
        placeholder="0000 0000 0000 0000"
        label="Номер карты*"
        name="cardNumber"
        InputLabelProps={{
          shrink: true,
        }}
        className={styles.cardNumber}
        control={props.control}
      />
      <Controller
        as={<CustomInput errors={props.errors} />}
        placeholder="02/01"
        className={styles.dateField}
        name="expiryDate"
        control={props.control}
      />
    </div>
  );
};
