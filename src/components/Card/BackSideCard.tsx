import React from 'react';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core';

import { ICardProps } from 'pages/ProfilePage/ProfilePage';
import { CustomInput } from 'components/shared';

const useStyles = makeStyles({
  backSide: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
  },
  userName: {
    marginTop: '40px',
  },
  cvcCode: {
    marginTop: 'auto',
    maxWidth: '150px',
  },
});

export const BackSideCard: React.FC<ICardProps> = props => {
  const styles = useStyles();

  return (
    <div className={styles.backSide} data-testid="back-side">
      <Controller
        as={<CustomInput errors={props.errors} />}
        placeholder="USER NAME"
        label="Имя владельца:"
        InputLabelProps={{
          shrink: true,
        }}
        className={styles.userName}
        name="cardName"
        control={props.control}
      />
      <Controller
        as={<CustomInput errors={props.errors} />}
        control={props.control}
        placeholder="***"
        label="CVC"
        type="password"
        InputLabelProps={{
          shrink: true,
        }}
        className={styles.cvcCode}
        name="cvc"
      />
    </div>
  );
};
