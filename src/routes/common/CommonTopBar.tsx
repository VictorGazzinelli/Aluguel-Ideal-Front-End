import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { ResidenceContext } from "../../providers/ResidenceProvider";
import requestUtils from "../../utils/requestUtils";

const CommonTopBar = () => {
    const history = useHistory();
    const { isUserAuthenticated } = useContext(ResidenceContext);

    const onLoginClick = () => {
        history.push('/login');
    }

    const onMeusImoveisClick = () => {
        alert('Funcionalidade em desenvolvimento')
    }

    const onPainelDeControle = () => {
        alert('Funcionalidade em desenvolvimento')
    }

    const onLogoutClick = () => {
        alert('Funcionalidade em desenvolvimento')
    }

    return (
        <SToolbar >
            <Menu>
            <MenuButton as={MenuIcon} aria-label="menu"/>
                <MenuList>
                    {
                        !isUserAuthenticated &&
                        <MenuItem onClick={onLoginClick}>
                            Login
                        </MenuItem>
                    }
                    {
                        isUserAuthenticated &&
                        <MenuItem onClick={onMeusImoveisClick}>
                            Meus Imoveis
                        </MenuItem>
                    }
                    {
                        isUserAuthenticated &&
                        <MenuItem onClick={onPainelDeControle}>
                            Painel de Controle
                        </MenuItem>
                    }
                    {
                        isUserAuthenticated &&
                        <MenuItem onClick={onLogoutClick}>
                            Logout
                        </MenuItem>
                    }
                </MenuList>
            </Menu>
        </SToolbar>
    );

}
export default CommonTopBar;

const SToolbar = styled.div`
    display:flex;
    align-items: center;
    padding-left:16px;
    width:100%;
    height:48px;
    justify-content:space-between;
    border-bottom:1px solid lightblue;
`