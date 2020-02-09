import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

import { ICardProps } from 'pages/ProfilePage/ProfilePage';

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
    maxWidth: '110px',
  },
});

export const BackSideCard: React.FC<ICardProps> = props => {
  const styles = useStyles();

  return (
    <div className={styles.backSide}>
      <TextField
        placeholder="USER NAME"
        label="Имя владельца:"
        InputLabelProps={{
          shrink: true,
        }}
        className={styles.userName}
        name="cardName"
        onChange={props.handleInputChange}
      />
      <TextField
        placeholder="***"
        label="CVC"
        type="password"
        InputLabelProps={{
          shrink: true,
        }}
        className={styles.cvcCode}
        name="cvc"
        onChange={props.handleInputChange}
      />
    </div>
  );
};
