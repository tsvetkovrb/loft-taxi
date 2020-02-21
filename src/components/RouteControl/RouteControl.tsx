import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { InformationBanner } from './components';
import { ControlsContainer as Controls } from 'containers/ControlsContainer';
import { history } from 'utils/history';

const useStyles = makeStyles({
  paper: {
    position: 'fixed',
    top: '170px',
    left: '200px',
    boxSizing: 'border-box',
    padding: '40px 50px',
    width: '480px',
  },
  from: {
    marginBottom: '40px',
  },
  mb30: {
    marginBottom: '30px',
  },
});

interface IRouteControl {
  hasCardData: boolean;
  clearMap: () => void;
}

export const RouteControl: React.FC<IRouteControl> = props => {
  const styles = useStyles();

  const goToProfilePage = () => {
    history.push('/profile');
  };

  return (
    <Paper elevation={1} className={styles.paper}>
      {props.hasCardData ? (
        <Controls clearMap={props.clearMap} />
      ) : (
        <InformationBanner
          title="Заполните платежные данные"
          info="Укажите информацию о банковской карте, чтобы сделать заказ"
          buttonTitle="Перейти в профиль"
          onClick={goToProfilePage}
        />
      )}
    </Paper>
  );
};
