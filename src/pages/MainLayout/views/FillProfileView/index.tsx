import { useOutletContext } from 'react-router-dom';
import CareRecipient from './component/CareRecipient';
import HealthProfessionalView from './component/HealthProfessional';
import { ContextType, UserType } from '../../../../types';

export default function FillProfile() {
  const { storedUser } = useOutletContext<ContextType>();
  return (
    <div>
      {storedUser.user.userType === UserType.CARE_RECIPIENT ? (
        <CareRecipient />
      ) : (
        <HealthProfessionalView />
      )}
    </div>
  );
}
