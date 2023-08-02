import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip/Chip';
import Typography from '@mui/material/Typography/Typography';
import Card from './component/Card';
import { useHealthProfessionals } from './hooks/useHealthProfessionals';
import { HealthProfessionalResponse } from '../../../../types';
import Nodata from '../../../../assets/vector/no_data_re_kwbl.svg';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';

interface ChipData {
  key: number;
  label: string;
}
export default function FilterHealthProfessionals() {
  const [chipData] = useState<ChipData[]>([
    { key: 0, label: 'All' },
    { key: 1, label: 'Excellent' },
    { key: 2, label: 'Very Good' },
    { key: 3, label: 'Good' },
  ]);

  const { id } = useParams();
  const { healthProfessionals, setFilter } = useHealthProfessionals(id!);
  useEffect(() => {
    setFilter(id!);
  }, [id, setFilter]);
  return (
    <div className="py-3 px-3 flex flex-col justify-center items-center">
      {/* DISPLAY RESULTS */}
      <div className="flex flex-col justify-center items-center">
        {!healthProfessionals.length ? (
          <EmptyResults message="No Staff found" />
        ) : (
          healthProfessionals.map((staff: HealthProfessionalResponse) => (
            <Link
              key={staff.userID}
              to={`/details/health-professional/${staff.userID}`}
            >
              <Card
                firstName={staff.firstName}
                lastName={staff.lastName}
                displayPicture={staff.displayPicture}
                specialization={staff.specialization.name}
                organization={staff.organization.name}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
