import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
    loginComponent: ReactElement,
}

const TemplateLogin: React.FC<IProps> = ({ loginComponent }) => (
    <StyledLoginWrapper>
        <BoxWrapper>
            <div className="login-box-wrapper">
                {loginComponent}
            </div>
        </BoxWrapper>
    </StyledLoginWrapper>
);
export default TemplateLogin;

const BoxWrapper = styled.div`

    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    flex-direction:row;

    .login-box-wrapper {
        background: white;
        width: 360px;
        height: auto;
        min-height: 450px;
        
        box-shadow: 0 25px 75px rgba(16,30,54,.25);
        border-radius: 16px;
        padding:30px;

        display:flex;
        flex-direction:column;
    }

    .form-box-wrapper{
        display:flex;
        flex:1;
        flex-direction:column;

        margin-top: 10px;
    }
`;

const StyledLoginWrapper = styled.div`

    display:flex;
    flex:1;
    background-repeat: no-repeat; 
    background-color:#993399;
    background-position: center;
    background-size: cover;
`;
