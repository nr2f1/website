import type { AvailableLocale } from '@i18n/locales';

export enum Role {
  ParentPatient = 'parent-patient',
  Specialist = 'specialist',
  Supporter = 'supporter',
}

interface OptionProps {
  label: string;
  value: Role;
}

type LocaleRoleOptions = Record<AvailableLocale, OptionProps[]>;

export const roles: LocaleRoleOptions = {
  en: [
    {
      label: 'BBSOAS parent/carer or patient',
      value: Role.ParentPatient,
    },
    { label: 'Supporter', value: Role.Supporter },
    {
      label: 'Researcher, doctor or specialist',
      value: Role.Specialist,
    },
  ],
  fr: [
    {
      label: 'Parent/tuteur ou patient BBSOAS',
      value: Role.ParentPatient,
    },
    { label: 'Supporter', value: Role.Supporter },
    {
      label: 'Chercheur, médecin ou spécialiste',
      value: Role.Specialist,
    },
  ],
  es: [
    {
      label: 'Pariente/cuidador o paciente de BBSOAS',
      value: Role.ParentPatient,
    },
    { label: 'Seguidor', value: Role.Supporter },
    {
      label: 'Investigador, doctor o especialista.',
      value: Role.Specialist,
    },
  ],
  de: [
    {
      label: 'BBSOAS Elternteil/Betreuer oder Patient',
      value: Role.ParentPatient,
    },
    { label: 'Fan', value: Role.Supporter },
    { label: 'Forscher, Arzt oder Spezialist', value: Role.Specialist },
  ],
};

type ValidationErrorMessage = Record<AvailableLocale, string>;

export const validatioErrorMessage: ValidationErrorMessage = {
  en: 'This is a mandatory field',
  fr: 'Ce champ est obligatoire',
  es: 'Este campo es obligatorio',
  de: 'Dies ist ein Pflichtfeld',
};
