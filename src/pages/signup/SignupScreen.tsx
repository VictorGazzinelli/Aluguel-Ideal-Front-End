import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Input, Button, Spin} from 'antd';
import styled from 'styled-components';

import ClickableText from '../../components/ClickableText'

import loginPaths from '../../routes/login/loginPaths'
import commonPaths from '../../routes/common/commonPaths'
import useKeyPress from '../../hooks/useKeyPress';
import useDoRequest from '../../hooks/useDoRequest';
import requestUtils from '../../utils/requestUtils'

const SignupScreen: React.FC = () => {
  const history = useHistory();
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [loading, setLoading] = useState(false);
  const enterPress = useKeyPress('Enter');
  const signupRequest = useDoRequest((api) => api.auth.Signup);

  const changeLoginText = (event: any) => {
    setEmailText(event.target.value);
  };

  const changePasswordText = (event: any) => {
      setPasswordText(event.target.value);
  };

  const redirectToLogin = () => {
    history.push(loginPaths.login);
  };

  const redirectHome = () => {
    history.push(commonPaths.home);
  };

  const onEnterPress = () => {
    if (!enterPress) return;
    signup();
  };
  useEffect(onEnterPress, [enterPress]);

  const signup = () => {
    setLoading(true);
    signupRequest.doRequest({
      email: emailText,
      password: passwordText,
    })
    .then((response) => {
      requestUtils.setBearerToken(response.bearerToken)
      redirectHome()
    })
    .catch(err =>{
      console.error(err)
      alert("Email ou Senha invalidos") 
    })
    .finally(() => setLoading(false))
  };

  return (
    <Wrapper>
    {
      !loading ? (
          <div>
              <h2>{'Seja bem vindo!'}</h2>
              <h4>{'Crie na sua conta'}</h4>
              <label>{'Email'}</label>
              <Input
                  size="middle"
                  autoFocus
                  value={emailText}
                  onChange={changeLoginText}
              />
              <label>{'Senha'}</label>
              <Input
                  type="password"
                  size="middle"
                  value={passwordText}
                  onChange={changePasswordText}
                  suffix=
                  {(
                      <ClickableText onClick={redirectToLogin} className="sufix">
                          {'Quero fazer login'}
                      </ClickableText>
                  )}
              />
              <div className="buttons-wrapper">
                  <Button onClick={signup} type="primary">{'Entrar'}</Button>
              </div>
          </div>
      ) :
      (
          <div className="loading-wrapper">
              <Spin />
          </div>
      )
    }
    </Wrapper>
  );
};
export default SignupScreen;

const Wrapper = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    position: relative;

    .buttons-wrapper{
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;

        display:flex;
        flex:1;
        flex-direction:column;
    }

    .invalid-field-value{
        color:#f5222d;
    }
    .sufix{
        font-weight: 600;
    }

    .loading-wrapper{
        display:flex;
        flex:1;
        align-content:center;
        justify-content:center;
    }
`;
