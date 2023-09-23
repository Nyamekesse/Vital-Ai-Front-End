import AppBar from '@mui/material/AppBar/AppBar';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledBadge } from './StyledBadge';
import AiLogo from '../../../../../assets/logo.png';

type Props = {
  handleClose: () => void;
};

export default function TopBar({ handleClose }: Props) {
  return (
    <AppBar position="fixed" color="default" sx={{ height: 60 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="flex items-center">
          <div className="">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Ai Logo" src={AiLogo} />
            </StyledBadge>
          </div>
          <div className="">
            <Typography
              sx={{ ml: 2, flex: 1, fontSize: '1.5rem', fontWeight: 700 }}
              variant="h4"
              component="div"
            >
              Vital Ai Bot
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
