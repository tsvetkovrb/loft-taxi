import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { InformationBanner } from './components';
import { ControlsContainer as Controls } from 'containers/ControlsContainer';

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
}

export const RouteControl: React.FC<IRouteControl> = props => {
  const styles = useStyles();

  return (
    <Paper elevation={1} className={styles.paper}>
      {props.hasCardData ? <Controls /> : <InformationBanner />}
    </Paper>
  );
};
