import React, { useState, ChangeEvent } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import { WithBackground } from 'components/layout/WithBackground';
import { CardWrapper } from 'components/layout/CardWrapper';
import { FrontSideCard } from 'components/Card';
import { BackSideCard } from 'components/Card';

import { IPayloadProfileData } from 'store/actions/profileActions';

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
  cardsWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '50px',
    width: '794px',
  },
});

export interface ICardProps {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IProfilePageProps {
  token: string;
  isSending: boolean;
  sendCardData: (data: IPayloadProfileData) => void;
}

export const ProfilePage: React.FC<IProfilePageProps> = props => {
  const styles = useStyles();
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setCardData({ ...cardData, [name]: value });
  };

  const sendCardData = () => {
    props.sendCardData({
      ...cardData,
      token: props.token,
    });
  };

  return (
    <section data-testid="profile-page">
      <WithBackground>
        <div className={styles.content}>
          <div className={styles.typography}>
            <h2 className={styles.title}>Профиль</h2>
            <span className={styles.subtitle}>Способ оплаты</span>
          </div>

          <div className={styles.cardsWrapper}>
            <CardWrapper>
              <FrontSideCard handleInputChange={handleInputChange} />
            </CardWrapper>
            <CardWrapper>
              <BackSideCard handleInputChange={handleInputChange} />
            </CardWrapper>
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={sendCardData}
            data-testid="profile-page-button"
          >
            {props.isSending ? 'В процессе...' : 'Сохранить'}
          </Button>
        </div>
      </WithBackground>
    </section>
  );
};
