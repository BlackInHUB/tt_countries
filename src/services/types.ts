export type CountryShortInfo = {
  countryCode: string
  name: string
}

export type CountryInfo = {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  borders: [string]
}

type HolidayType = 'Public' | 'Bank' | 'School' | 'Authorities' | 'Optional' | 'Observance'

export type CountryHoliday = {
  date: string
  localName: string
  name: string
  countryCode: string
  global: boolean
  counties: [string]
  launchYear: number
  types: [HolidayType]
}

export type CountryWithHoliday = CountryShortInfo & { holidayName: string; holidayDate: string }
