import React from 'react';
import { makeStyles } from '@material-ui/core';
import MainBg from 'static/main_bg.png';

const useStyles = makeStyles(() => ({
  withBackground: (props: IWithBackgroundProps) => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: props.centered ? 'center' : 'flex-start',
    alignItems: 'center',
    backgroundImage: `url(${MainBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#2e2e2e',
    flexDirection: 'column',
  }),
}));

interface IWithBackgroundProps {
  children: React.ReactNode;
  centered?: boolean;
}

export const WithBackground: React.FC<IWithBackgroundProps> = props => {
  const styles = useStyles(props);

  return (
    <div className={styles.withBackground} data-testid="with-background">
      {props.children}
    </div>
  );
};
