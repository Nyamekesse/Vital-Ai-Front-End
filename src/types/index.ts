export interface ContextType {
  storedUser: InfoResponse;
}

export interface CareRecipient {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | string;
  gender: Gender;
  age: number;
  contactInfo: string;
  location: string;
  healthBackground: string;
  displayPicture: string;
  createdAt?: Date | string;
  updatedAt: Date | string;
  userID: string;
}

export interface HealthProfessional {
  firstName: string;
  lastName: string;
  about: string;
  gender: Gender;
  specializationId: string;
  medicalLicenseNumber: string;
  contactInfo: string;
  displayPicture: string;
  experience: number;
  createdAt?: Date | string;
  updatedAt: Date | string;
  userID: string;
  organizationID: string;
  organization: Organization;
  specialization: Specialization;
  Connection: Connection[];
  Review: Review[];
}

export interface Appointment {
  id: string;
  scheduledTime: Date | string;
  purpose: string;
  status: Status;
  careRecipientID: string;
  careRecipient: CareRecipient;
  healthProfessionalID: string;
  healthProfessional: HealthProfessional;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  userType: UserType;
  createdAt?: Date | string;
  updatedAt: Date | string;
}

export interface Organization {
  id: string;
  name: string;
  location: string;
  openTime: Date | string;
  closeTime: Date | string;
  createdAt?: Date | string;
  updatedAt: Date | string;
}
export interface Review {
  id: string;
  text: string;
  rating: number;
  careRecipient: CareRecipient;
  healthProfessionalID: string;
  careRecipientID: string;
  created_at?: Date | string;
  updated_at: Date | string;
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
  about: string;
  displayPicture: string;
  organizationID: string;
  userID: string;
  organization: {
    name: string;
  };
}
export interface Connection {
  id: string;
  createdAt?: Date | string;
  updatedAt: Date | string;
  careRecipientID: string;
  careRecipient: CareRecipient;
  healthProfessionalID: string;
  healthProfessional: HealthProfessional;
}
export interface Specialization {
  id: string;
  name: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  isRead: boolean;
  userID: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface InfoResponse extends CareRecipient, HealthProfessional {
  user: User;
  Connection: Connection[];
}

export interface UseMessagesById {
  messages: SingleChatDetails[];
  participants: string[];
}

export interface SingleChatDetails {
  _id: string;
  content: string;
  author: string;
  date: string;
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
