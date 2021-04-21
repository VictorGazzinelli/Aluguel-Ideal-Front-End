import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {Input, Button, Spin} from 'antd';
import styled from 'styled-components';

const LoginScreen: React.FC = () => {
    return (
        <Wrapper>
            {
                !false ? (
                    <div>
                        <h2>{'Seja bem vindo!'}</h2>
                        <h4>{'Faça login na sua conta'}</h4>
                        <label>{'Email'}</label>
                        <Input
                            size="middle"
                            placeholder={'Insira o email de acesso'}
                            autoFocus
                            // value={loginText}
                            // onChange={changeLoginText}
                        />
                        <label>{'Senha'}</label>
                        <Input
                            type="password"
                            size="middle"
                            placeholder={'Insira a senha'}
                            // value={passwordText}
                            // onChange={changePasswordText}
                            // suffix={(
                            //     <ClickableText onClick={redirectForgotPassword} className="forgot">
                            //         {translate({ id: 'Esqueci minha senha' })}
                            //     </ClickableText>
                            // )}
                        />
                        {/* {
                            !!error.length && <span className="invalid-field-value">{translate({ id: error })}</span>
                        } */}
                        <div className="buttons-wrapper">
                            <Button onClick={() => console.log('click')} type="primary">{'Entrar'}</Button>
                        </div>
                    </div>
                ) : (
                    <div className="loading-wrapper">
                        <Spin />
                    </div>
                )
            }


        </Wrapper>
    );
};
export default LoginScreen;

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
    .forgot{
        font-weight: 600;
    }

    .loading-wrapper{
        display:flex;
        flex:1;
        align-content:center;
        justify-content:center;
    }
`;
