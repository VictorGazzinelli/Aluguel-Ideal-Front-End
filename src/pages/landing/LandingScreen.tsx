import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../components/Logo'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: `#06B2FD`,
  },
}));



const LandingScreen: React.FC = () => {
  const classes = useStyles();
  const [city, setCity] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [maxPrice, setMaxPrice] = React.useState('');
  const [minBathroom, setMinBathroom] = React.useState('');

  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  }

  const handleDistrictChange = (event: any) => {
    setDistrict(event.target.value);
  };

  const handleMaxPriceChange = (event: any) => {
    setMaxPrice(event.target.value);
  };

  const handleMinBathroom = (event: any) => {
    setMinBathroom(event.target.value);
  };

  return(
    <>
      <Logo />
      <Typography component="h1" variant="h5">
        Aluguel Ideal
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          id="standard-select-city"
          select
          label="Cidade"
          value={city}
          onChange={handleCityChange}
          fullWidth
        />
        <TextField
          id="standard-select-district"
          select
          label="Bairro"
          value={district}
          onChange={handleDistrictChange}
          fullWidth
        />
        <TextField
          id="standard-select-max-price"
          select
          label="Aluguel até"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          fullWidth
        />
        <TextField
          id="standard-select-min-bedrooms"
          select
          label="Quartos"
          value={minBathroom}
          onChange={handleMinBathroom}
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Pesquisar
        </Button>
      </form>
    </>
  )
}

export default LandingScreen;