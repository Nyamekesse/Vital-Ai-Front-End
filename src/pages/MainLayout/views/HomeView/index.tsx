import { Carousel } from '../../../../components';
import ConnectionsListDisplay from './components/ConnectionsDisplay';
import SpecialitySection from './components/SpecialitySection';
import OrganizationSection from './components/OrganizationSection';

export default function HomeScreen() {
  return (
    <div className="py-3 px-3">
      <Carousel />
      <div className="mt-8 flex flex-col items-center justify-start">
        <OrganizationSection />
        <SpecialitySection />
        <ConnectionsListDisplay />
      </div>
    </div>
  );
}
