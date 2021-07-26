import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SettingsIcon from '@material-ui/icons/Settings';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B4B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    fontSize: " 20px",
    fontWeight: "bold",
    color: 'white',
    width: 80,
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },

})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.main,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                style={buttonStyle}
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Menu
      </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <CreditCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Add Card" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <AccountBalanceWalletIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Wallet" />
                </StyledMenuItem>

                <StyledMenuItem>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </StyledMenuItem>

            </StyledMenu>

        </div>
    );
}