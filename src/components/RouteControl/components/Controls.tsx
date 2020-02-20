import React, { useEffect, useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { CustomSelect } from 'components/CustomSelect';

const useStyles = makeStyles({
  from: {
    marginBottom: '40px',
  },
});

interface ICOntrolProps {
  addresses: any;
  fetchCoordinates: (from: string, to: string) => void;
}

export const Controls: React.FC<ICOntrolProps> = props => {
  const styles = useStyles();
  const [addresses, setAddresses] = useState(props.addresses);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  useEffect(() => {
    let filteredAddresses;
    if (from && to) {
      filteredAddresses = props.addresses.filter(
        (item: any) => item.value !== from.value && item.value !== to.value,
      );
    } else if (from) {
      filteredAddresses = props.addresses.filter((item: any) => item.value !== from.value);
    } else if (to) {
      filteredAddresses = props.addresses.filter((item: any) => item.value !== to.value);
    } else {
      filteredAddresses = props.addresses;
    }
    setAddresses(filteredAddresses);
  }, [from, props.addresses, to]);

  const handleClick = () => {
    const { value: fromValue } = from;
    const { value: toValue } = to;

    if (fromValue && toValue) {
      props.fetchCoordinates(fromValue, toValue);
    }
  };

  return (
    <>
      <div className={styles.from}>
        <CustomSelect options={addresses} placeholder="Откуда" onChange={setFrom} value={from} />
      </div>
      <div className={styles.from}>
        <CustomSelect options={addresses} placeholder="Куда" onChange={setTo} value={to} />
      </div>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={!from || !to}
        onClick={handleClick}
      >
        Вызвать такси
      </Button>
    </>
  );
};
