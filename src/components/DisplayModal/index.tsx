import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserType } from '../../types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

type Props = {
  userType: UserType;
  content: string;
};

export default function Display({ userType, content }: Props) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {userType === UserType.HEALTH_PROFESSIONAL
              ? 'Recommended drug'
              : 'Symptoms diagnose result'}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {userType === UserType.HEALTH_PROFESSIONAL
              ? content
              : `It is likely you are suffering from ${content}`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
