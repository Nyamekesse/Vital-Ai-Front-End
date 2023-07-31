export interface CareRecipient {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | string;
  gender: Gender;
  contactInfo: string;
  location: string;
  healthBackground: string;
  displayPicture?: string | null;
  createdAt?: Date | string;
  updatedAt: Date | string;
  userID: string;
}

export interface HealthProfessional {
  firstName: string;
  lastName: string;
  gender: Gender;
  specializationId: string;
  medicalLicenseNumber: string;
  contactInfo: string;
  displayPicture?: string | null;
  createdAt?: Date | string;
  updatedAt: Date | string;
  userID: string;
  organizationID: string;
}

export interface Appointment {
  id?: string;
  date: Date | string;
  time: Date | string;
  purpose: string;
  status?: Status;
  createdAt?: Date | string;
  updatedAt: Date | string;
  careRecipientID: string;
  healthProfessionalID: string;
}

export interface Organization {
  id?: string;
  name: string;
  location: string;
  createdAt?: Date | string;
  updatedAt: Date | string;
}

export enum UserType {
  CARE_RECIPIENT = 'CARE_RECIPIENT',
  HEALTH_PROFESSIONAL = 'HEALTH_PROFESSIONAL',
  ORGANIZATION_ADMIN = 'ORGANIZATION_ADMIN',
  ADMIN = 'ADMIN',
}
export interface HealthProfessionalResponse {
  firstName: string;
  lastName: string;
  specialization: {
    id: string;
    name: string;
  };
  displayPicture: string;
  organizationID: string;
  userID: string;
  organization: {
    name: string;
  };
}

export interface InfoResponse {
  contactInfo: string;
  dateOfBirth: string;
  displayPicture: string;
  firstName: string;
  gender: string;
  healthBackground: string;
  lastName: string;
  location: string;
}

export enum Status {
  PENDING = 'PENDING',
  UPCOMING = 'UPCOMING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
