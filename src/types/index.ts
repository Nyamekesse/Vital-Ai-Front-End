// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

export enum UserType {
  PATIENT = 'PATIENT',
  HEALTHPROFESSIONAL = 'HEALTHPROFESSIONAL',
}

export interface User {
  id?: string
  username: string
  email: string
  password: string
  userType: UserType
  created_at?: Date | string
  updated_at: Date | string
}

export interface CareRecipient {
  firstName: string
  lastName: string
  dateOfBirth: Date | string
  gender: string
  contactInfo: string
  location: string
  healthBio: string
  userId: string
  medicalRecords: MedicalRecord[]
  appointments: Appointment[]
}

export interface HealthProfessional {
  firstName: string
  lastName: string
  specialization: string
  medicalLicenseNumber: string
  contactInfo: string
  userId: string
  medicalRecords: MedicalRecord[]
  appointments: Appointment[]
}

export interface MedicalRecord {
  id?: string
  date: Date | string
  diagnosis: string
  treatmentDetails: string
  patientId: string
  healthProfessionalId: string
  created_at?: Date | string
  updated_at: Date | string
}

export interface Appointment {
  id?: string
  date: Date | string
  time: string
  status: string
  patientId: string
  healthProfessionalId: string
  created_at?: Date | string
  updated_at: Date | string
}
