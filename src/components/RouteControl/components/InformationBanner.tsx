import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import { history } from 'utils/history';

const useStyles = makeStyles({
  mb30: {
    marginBottom: '30px',
  },
});

export const InformationBanner = () => {
  const styles = useStyles();

  const goToProfilePage = () => {
    history.push('/profile');
  };

  return (
    <>
      <Typography variant="h4" className={styles.mb30}>
        Заполните платежные данные
      </Typography>
      <Typography variant="subtitle1" className={styles.mb30}>
        Укажите информацию о банковской карте, чтобы сделать заказ
      </Typography>
      <Button fullWidth variant="contained" color="primary" onClick={goToProfilePage}>
        Перейти в профиль
      </Button>
    </>
  );
};
