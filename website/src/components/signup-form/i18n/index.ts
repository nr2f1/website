import type { AvailableLocale } from '@i18n/locales';

export enum Role {
  ParentPatient = 'parent-patient',
  Specialist = 'specialist',
  Supporter = 'supporter',
}

interface RoleOptionProps {
  label: string;
  value: Role;
}

type LocaleRoleOptions = Record<AvailableLocale, RoleOptionProps[]>;

export const roles: LocaleRoleOptions = {
  de: [
    {
      label: 'BBSOAS Elternteil/Betreuer oder Patient',
      value: Role.ParentPatient,
    },
    { label: 'Fan', value: Role.Supporter },
    { label: 'Forscher, Arzt oder Spezialist', value: Role.Specialist },
  ],
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
  it: [
    {
      label: 'Genitore/caregiver BBSOAS o paziente',
      value: Role.ParentPatient,
    },
    { label: 'Sostenitore', value: Role.Supporter },
    {
      label: 'Ricercatore, medico o specialista',
      value: Role.Specialist,
    },
  ],
  'pt-BR': [
    {
      label: 'Pai/mãe ou paciente BBSOAS',
      value: Role.ParentPatient,
    },
    { label: 'Apoiador', value: Role.Supporter },
    {
      label: 'Pesquisador, médico ou especialista',
      value: Role.Specialist,
    },
  ],
  'zh-CN': [
    {
      label: 'BBSOAS 父母/监护人或患者',
      value: Role.ParentPatient,
    },
    { label: '支持者', value: Role.Supporter },
    {
      label: '研究员、医生或专家',
      value: Role.Specialist,
    },
  ],
};

export interface CountryOptionProps {
  label: string;
  value: string;
}
