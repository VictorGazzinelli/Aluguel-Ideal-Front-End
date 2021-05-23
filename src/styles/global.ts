import { createGlobalStyle } from 'styled-components';
import { light } from './theme'

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background: ${light.SYSTEM_BACKGROUND};
        font-size: 13px;
        color:${light.ITENS_TEXT};
        height:100vh;
        width:100vw;
        overflow: hidden;
        transition: background 0.5s;
        display: flex;
    }

    #root{ 
        display: flex;
        flex: 1;
        overflow:hidden;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        -webkit-box-shadow: none;
    }

  *::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.1);
        border-radius: 60px;
    }

    /* ANTD colors  */
 
    .ant-btn-primary {
        background: ${light.PRIMARY_MAIN};
        border-color: ${light.PRIMARY_MAIN};

        :hover {
            background: ${light.PRIMARY_LIGTH};
            border-color: ${light.PRIMARY_LIGTH};
        }
        :focus {
            background: ${light.PRIMARY_MAIN};
            border-color: ${light.PRIMARY_MAIN};
        }

        :active {
            background: ${light.PRIMARY_DARK};
            border-color: ${light.PRIMARY_DARK};
        }
    }
`;
