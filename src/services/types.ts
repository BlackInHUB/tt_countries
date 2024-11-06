export interface CountryShortInfo {
  countryCode: string
  name: string
}

export interface CountryInfo {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: [string]
}

type HolidayType = 'Public' | 'Bank' | 'School' | 'Authorities' | 'Optional' | 'Observance'

export interface CountryHoliday {
  date: string
  localName: string
  name: string
  countryCode: string
  global: boolean
  counties: [string]
  launchYear: number
  types: [HolidayType]
}
