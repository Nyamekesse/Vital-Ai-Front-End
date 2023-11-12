import { useState } from 'react';
import CareRecipient from './component/CareRecipient';
import HealthProfessionalView from './component/HealthProfessional';
import { UserType } from '../../../../types';
import { useUserInfo } from '../../../LogIn/hooks/useUserInfo';

export default function FillProfile() {
  const { data: user } = useUserInfo();
  const [userType] = useState(sessionStorage.getItem('userType'));
  return (
    <div>
      {userType === UserType.CARE_RECIPIENT ? (
        <CareRecipient userDetails={user} />
      ) : (
        <HealthProfessionalView userDetails={user} />
      )}
    </div>
  );
}
