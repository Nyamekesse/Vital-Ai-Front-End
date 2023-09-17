import Card from './component/Card';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import { useUserInfo } from '../../../LogIn/hooks/useUserInfo';

export default function FavoriteHealthProfessionalView() {
  const storedUser = useUserInfo();

  return (
    <div className="py-3 px-3 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {!storedUser?.Connection.length ? (
          <EmptyResults message="No Staff found" />
        ) : (
          storedUser?.Connection.map((staff) => (
            <Card
              key={staff.healthProfessional.userID}
              id={staff.healthProfessional.userID}
              firstName={staff.healthProfessional.firstName}
              lastName={staff.healthProfessional.lastName}
              displayPicture={staff.healthProfessional.displayPicture}
              specialization={staff.healthProfessional.specialization.name}
              organization={staff.healthProfessional.organization.name}
            />
          ))
        )}
      </div>
    </div>
  );
}
