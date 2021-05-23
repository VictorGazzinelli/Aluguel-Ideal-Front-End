import React from 'react';

import styled from 'styled-components';

interface IProps{
    disabled?:boolean,
    onClick?: () => void,
    className?: string
}

const ClickableText: React.FC<IProps> = ({
    children, onClick, disabled = false, className,
}) => (
    <StyledSpan className={className} onClick={onClick} disabled={disabled}>
        {children}
    </StyledSpan>
);
export default ClickableText;

const StyledSpan = styled.span<{disabled: boolean}>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: transparent;
    color:${(props) => (props.disabled ? 'grey' : '#1890ff')};

    :hover{
        transition:color 0.3s;
        color:${(props) => (props.disabled ? 'grey' : '#40a9ff')};
    }
    
    :active{
        color:${(props) => (props.disabled ? 'grey' : '#096dd9')};
    }  
`;
