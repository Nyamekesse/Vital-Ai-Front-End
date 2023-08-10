import AppBar from '@mui/material/AppBar/AppBar';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography/Typography';

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
          <Typography
            sx={{ ml: 2, flex: 1, fontSize: '1.5rem', fontWeight: 700 }}
            variant="h4"
            component="div"
          >
            Your Chats
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
