import { FieldError, UseFormRegister } from 'react-hook-form'

export type FormData = {
  cin: string
  nom: string
  prenom: string
  regions: string
  brigads: string
  compagnies: string
}

export type FormFieldProps = {
  type: string
  placeholder: string
  name: ValidFieldNames

  register: UseFormRegister<FormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
  data?: any
  method?: any
  setValue?: any
}

export type ValidFieldNames =
  | 'email'
  | 'nom'
  | 'regions'
  | 'compagnies'
  | 'prenom'
  | 'brigads'
  | 'cin'
