import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from './component/Card';
import { useHealthProfessionals } from './hooks/useHealthProfessionals';
import { HealthProfessionalResponse } from '../../../../types';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';

export default function FilterHealthProfessionals() {
  const { id } = useParams();
  const { healthProfessionals, setFilter } = useHealthProfessionals(id!);
  useEffect(() => {
    setFilter(id!);
  }, [id, setFilter]);
  return (
    <div className="py-3 px-3 flex flex-col justify-center items-center">
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
