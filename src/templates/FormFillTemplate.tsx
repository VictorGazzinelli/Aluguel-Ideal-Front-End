import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
  organismComponent: ReactElement,
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const FormFillTemplate: React.FC<IProps> = ({ organismComponent }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        {organismComponent}
      </div>
    </Container>
  );

}
export default FormFillTemplate;
