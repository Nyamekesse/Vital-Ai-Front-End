import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

type Props = {
  open: boolean
  anchorEl: null | HTMLElement
  handleClose: () => void
}

export default function MobileMenu({ open, anchorEl, handleClose }: Props) {
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
