import { useState } from 'react';
import CareRecipient from './component/CareRecipient';
import HealthProfessionalView from './component/HealthProfessional';
import { UserType } from '../../../../types';

export default function FillProfile() {
  const [userType] = useState(sessionStorage.getItem('userType'));
  return (
    <div>
      {userType === UserType.CARE_RECIPIENT ? (
        <CareRecipient />
      ) : (
        <HealthProfessionalView />
      )}
    </div>
  );
}
