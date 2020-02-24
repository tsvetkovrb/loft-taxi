import React from 'react';
import { makeStyles } from '@material-ui/core';
import { WithBackground } from 'components/layout/WithBackground';
import { ProfileFormContainer as ProfileForm } from 'containers/ProfileFormContainer';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 75px 70px',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    marginTop: '160px',
  },
  typography: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#323232',
    margin: 0,
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#505050',
  },
});

export interface ICardProps {
  errors: any;
  control: any;
}

export const ProfilePage = () => {
  const styles = useStyles();

  return (
    <section data-testid="profile-page">
      <WithBackground>
        <div className={styles.content}>
          <div className={styles.typography}>
            <h2 className={styles.title}>Профиль</h2>
            <span className={styles.subtitle}>Способ оплаты</span>
          </div>

          <ProfileForm />
        </div>
      </WithBackground>
    </section>
  );
};
