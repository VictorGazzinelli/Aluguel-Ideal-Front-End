import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const CommonTopBar = () => {
    return (
        <SToolbar >
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton> 
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