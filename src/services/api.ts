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
  getHolidays: <T>(url: string, year: number, countyCode: string) =>
    instance.get<T>(`${url}/${year}/${countyCode}`),
}

const api = {
  getAvailableCountries: () => {
    try {
      return request.getAll<CountryShortInfo[]>('AvailableCountries')
    } catch (error) {
      console.log(error)
    }
  },
  getCountryByCode: (countryCode: string) => {
    try {
      return request.getByCode<CountryInfo>('CountryInfo', countryCode)
    } catch (error) {
      console.log(error)
    }
  },
  getCountryHolydays: (year: number, countryCode: string) => {
    try {
      return request.getHolidays<CountryHoliday[]>('PublicHolidays', year, countryCode)
    } catch (error) {
      console.log(error)
    }
  },
}

export default api
