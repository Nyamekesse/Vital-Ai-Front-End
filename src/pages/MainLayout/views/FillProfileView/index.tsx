import { useState } from 'react';
import CareRecipient from './component/CareRecipient';
import HealthProfessional from './component/HealthProfessional';

export default function FillProfile() {
  const [userType] = useState('PATIENT');
  return (
    <div>
      {userType === 'PATIENT' ? <CareRecipient /> : <HealthProfessional />}
    </div>
  );
}
