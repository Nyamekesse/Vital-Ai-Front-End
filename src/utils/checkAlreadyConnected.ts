import { Connection } from '../types';

export const checkIfConnectionExists = (
  currentHealthProId: string | undefined,
  listOfConnections: Connection[],
) => {
  return listOfConnections.some(
    (connectedHealthPro) =>
      connectedHealthPro.healthProfessional.userID === currentHealthProId,
  );
};
