import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import CareRecipient from './component/CareRecipient';
import HealthProfessionalView from './component/HealthProfessional';
import { UserType } from '../../../../types';

export default function RegisterProfileDetails() {
  const [userType] = useState(sessionStorage.getItem('userType'));

  return (
    <div>
      {userType === UserType.CARE_RECIPIENT ? (
        <CareRecipient />
      ) : userType === UserType.HEALTH_PROFESSIONAL ? (
        <HealthProfessionalView />
      ) : (
        <Navigate to="/register-new-user" replace />
      )}
    </div>
  );
}
