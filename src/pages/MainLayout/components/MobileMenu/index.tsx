import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useLogout } from '../../views/HomeView/hooks/useLogOut';

type Props = {
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
};

export default function MobileMenu({ open, anchorEl, handleClose }: Props) {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
    handleClose();
  };
  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/profile/me">Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
