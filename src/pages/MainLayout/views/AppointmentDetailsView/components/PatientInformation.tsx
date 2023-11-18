import Typography from '@mui/material/Typography/Typography';

type Props = {
  firstName: string;
  lastName: string;
  gender: string;
  purpose: string;
  age: number;
};

export default function PatientInformation({
  firstName,
  lastName,
  gender,
  purpose,
  age,
}: Props) {
  return (
    <div className="flex flex-col">
      <Typography
        variant="h5"
        mt={3}
        mb={1}
        sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#212121' }}
      >
        Patient Information
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Full Name&nbsp;&nbsp;&nbsp;&nbsp;: {firstName} {lastName}
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Gender&nbsp;&nbsp;&nbsp;&nbsp;: {gender}
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Age&nbsp;&nbsp;&nbsp;&nbsp;: {age}&nbsp;years
      </Typography>
      <Typography
        variant="caption"
        sx={{ fontWeight: 400, fontSize: '1rem' }}
        mt={1}
      >
        Problem&nbsp;&nbsp;&nbsp;&nbsp;: {purpose}
      </Typography>
    </div>
  );
}
