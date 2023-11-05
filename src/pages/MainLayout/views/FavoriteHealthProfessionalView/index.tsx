import Card from './component/Card';
import EmptyResults from '../../../../components/EmptyResponse/EmptyResults';
import { useConnections } from '../HomeView/hooks/useConnectionList';
import LoadingSpinner from '../../../../components/LoadingCircle';

export default function FavoriteHealthProfessionalView() {
  const { data: connections, isLoading } = useConnections();
  return (
    <div className="py-3 px-3 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : connections.length ? (
          connections.map((staff) => (
            <div key={staff.healthProfessional.userID}>
              <Card
                key={staff.healthProfessional.userID}
                id={staff.healthProfessional.userID}
                firstName={staff.healthProfessional.firstName}
                lastName={staff.healthProfessional.lastName}
                displayPicture={staff.healthProfessional.displayPicture}
                specialization={staff.healthProfessional.specialization.name}
                organization={staff.healthProfessional.organization.name}
              />
            </div>
          ))
        ) : (
          <div>
            <EmptyResults message="Not made any connections yet" />
          </div>
        )}
      </div>
    </div>
  );
}
