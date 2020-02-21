import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  mb30: {
    marginBottom: '30px',
  },
});

interface IInformationBanner {
  title: string;
  info: string;
  buttonTitle: string;
  onClick: () => void;
}

export const InformationBanner: React.FC<IInformationBanner> = props => {
  const styles = useStyles();

  return (
    <>
      <Typography variant="h4" className={styles.mb30}>
        {props.title}
      </Typography>
      <Typography variant="subtitle1" className={styles.mb30}>
        {props.info}
      </Typography>
      <Button fullWidth variant="contained" color="primary" onClick={props.onClick}>
        {props.buttonTitle}
      </Button>
    </>
  );
};
