import {
  Patients,
  Experience,
  Rating,
  Reviews,
} from '../../../../../assets/customIcons';
import { Review } from '../../../../../types';
import { calculateReviewRatingAverage } from '../../../../../utils/calculateReviewsAverage';

type Props = {
  patients: number;
  experience: number;
  rating: Review[];
  numOfReviews: number;
};

export default function Credentials({
  patients,
  experience,
  rating,
  numOfReviews,
}: Props) {
  const averageReviewRating = Number(
    calculateReviewRatingAverage(rating).toFixed(1),
  );
  return (
    <div className=" px-3 my-6 flex w-full flex-wrap justify-between items-center">
      <Patients numberOfPatients={patients} />
      <Experience numberOfExperience={experience} />
      <Rating averageRating={averageReviewRating} />
      <Reviews numberOfReviews={numOfReviews} />
    </div>
  );
}
