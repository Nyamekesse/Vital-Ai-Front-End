/* eslint-disable react/jsx-wrap-multilines */
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography/Typography';
import Chip from '@mui/material/Chip/Chip';
import Avatar from '@mui/material/Avatar/Avatar';
import { HealthProfessional } from '../../../../../types';
import { useOrganizationTeam } from '../hooks/useOrganizationTeam';

export default function OrganizationTeam({
  userName,
  organizationId,
}: {
  organizationId: string | undefined;
  userName: string;
}) {
  const organizationTeams = useOrganizationTeam(organizationId);
  return (
    <div className="flex flex-col mt-4 w-full">
      <Typography
        variant="h5"
        mb={1}
        sx={{ fontWeight: 700, fontSize: '1.2rem' }}
      >
        Your Team of Workers
      </Typography>
      <div className="flex flex-wrap items-center justify-stretch">
        {organizationTeams.map((member: HealthProfessional) => {
          if (member.firstName === userName) {
            return null;
          }
          return (
            <div key={member.userID}>
              <Link to={`/details/health-professional/${member.userID}`}>
                <Chip
                  avatar={
                    <Avatar
                      alt={member.firstName}
                      src={member.displayPicture}
                    />
                  }
                  variant="outlined"
                  color="primary"
                  label={`${member.firstName} ${member.lastName}`}
                  sx={{ margin: 0.5 }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
