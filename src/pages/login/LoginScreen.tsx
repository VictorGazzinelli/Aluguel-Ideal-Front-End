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

const LoginScreen: React.FC = () => {
  const classes = useStyles();

  return(
    <>
      <Logo />
      <Typography component="h1" variant="h5">
        Aluguel Ideal
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Senha"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Entrar
        </Button>
      </form>
    </>
  )
}

export default LoginScreen;