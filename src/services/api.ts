import axios, { type AxiosResponse } from 'axios'
import type { CountryHoliday, CountryInfo, CountryShortInfo } from './types'

const instance = axios.create({
  baseURL: 'https://date.nager.at/api/v3/',
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data

const request = {
  getAll: <T>(url: string) => instance.get<T>(url).then(responseBody),
  getByCode: <T>(url: string, countryCode: string) =>
    instance.get<T>(`${url}/${countryCode}`).then(responseBody),
  getNextHoliday: <T>(url: string, countryCode: string) =>
    instance.get<T>(`${url}/${countryCode}`).then(responseBody),
  getYearHolidays: <T>(url: string, year: number, countyCode: string) =>
    instance.get<T>(`${url}/${year}/${countyCode}`).then(responseBody),
}

const api = {
  getAvailableCountries: () => request.getAll<CountryShortInfo[]>('AvailableCountries'),
  getCountryByCode: (countryCode: string) =>
    request.getByCode<CountryInfo>('CountryInfo', countryCode),
  getCountryNextHoliday: (countryCode: string) =>
    request.getNextHoliday<CountryHoliday[]>('NextPublicHolidays', countryCode),
  getCountryYearHolidays: (year: number, countryCode: string) =>
    request.getYearHolidays<CountryHoliday[]>('PublicHolidays', year, countryCode),
}

export default api
