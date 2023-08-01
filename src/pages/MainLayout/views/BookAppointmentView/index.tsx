import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import About from './components/About';
import Card from './components/Card';
import ReviewCard from './components/ReviewCard';
import WorkingTime from './components/WorkingTime';
import AppointmentDialog from './components/AppointmentDialog';
import { useHealthProfessionalDetails } from './hooks';
import EmptyResponse from '../../../EmptyResults';
import Credentials from './components/Credentials';
import { calculateReviewRatingAverage } from '../../../../utils/calculateReviewsAverage';

export default function BookAppointmentView() {
  const { id = '' } = useParams();
  const details = useHealthProfessionalDetails(id);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return details ? (
    <div>
      <div className="py-2 px-3 flex flex-col justify-start">
        <Card
          firstName={details.firstName}
          lastname={details.lastName}
          displayPicture={details.displayPicture as string}
          organization={details.organization.name}
          specialization={details.specialization.name}
        />
        <Credentials
          experience={details.experience}
          numOfReviews={details.Review.length}
          patients={details.Connection.length}
          rating={details.Review}
        />
        <About
          firstName={details.firstName}
          lastname={details.lastName}
          about={details.about}
        />
        <WorkingTime
          openTime={details.organization.openTime}
          closeTime={details.organization.closeTime}
        />
        <div className="my-3">
          <Button
            sx={{ textTransform: 'initial' }}
            variant="contained"
            onClick={handleClickOpen}
          >
            Book Appointment
          </Button>
        </div>
        <Typography
          variant="h5"
          mt={3}
          sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
        >
          Reviews
        </Typography>
        <div className="flex flex-col">
          {details.Review.length ? (
            details.Review.map((review) => (
              <ReviewCard
                firstName={review.careRecipient.firstName}
                lastName={review.careRecipient.lastName}
                text={review.text}
                displayPicture={review.careRecipient.displayPicture}
                key={review.id}
              />
            ))
          ) : (
            <Typography>
              Sorry no reviews for {details.firstName} {details.lastName} yet!
            </Typography>
          )}
        </div>
      </div>
      <AppointmentDialog
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
      />
    </div>
  ) : (
    <EmptyResponse />
  );
}
