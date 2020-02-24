import React from 'react';
import { useForm } from 'react-hook-form';
import { CardWrapper } from 'components/layout/CardWrapper';
import { FrontSideCard, BackSideCard } from 'components/Card';
import { profileValidationSchema } from 'utils/validation';
import { makeStyles } from '@material-ui/core';
import { CustomButton } from 'components/shared';
import { IPayloadProfileData } from 'store/actions/profileActions';
import { ICardData } from 'utils/types';

const useStyles = makeStyles({
  cardsWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '50px',
    width: '794px',
  },
  center: {
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

interface IProfileFormProps {
  token: string;
  isSending: boolean;
  sendCardData: (data: IPayloadProfileData) => void;
  cardData: ICardData;
}

export const ProfileFrom: React.FC<IProfileFormProps> = props => {
  const { control, handleSubmit, errors } = useForm({
    defaultValues: props.cardData,
    validationSchema: profileValidationSchema,
  });

  const styles = useStyles();

  const onSubmit = (payload: any) => {
    console.log(payload);

    props.sendCardData({
      ...payload,
      token: props.token,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} data-testid="profile-form">
      <div className={styles.cardsWrapper}>
        <CardWrapper>
          <FrontSideCard errors={errors} control={control} />
        </CardWrapper>
        <CardWrapper>
          <BackSideCard errors={errors} control={control} />
        </CardWrapper>
      </div>
      <CustomButton
        type="submit"
        className={styles.center}
        color="primary"
        variant="contained"
        data-testid="profile-page-button"
        isLoading={props.isSending}
        title="Сохранить"
      />
    </form>
  );
};
