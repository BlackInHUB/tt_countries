<script lang="ts">
import HolidaysList from '@/components/HolidaysList.vue'
import YearsPagination from '@/components/YearsPagination.vue'
import api from '@/services/api'
import type { CountryHoliday, CountryInfo } from '@/services/types'

export default {
  data() {
    return {
      countryCode: this.$route.params.countryCode,
      countryInfo: {} as CountryInfo,
      holidays: [] as Array<CountryHoliday>,
      selectedYear: 2024,
      years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    }
  },
  components: {
    HolidaysList,
    YearsPagination,
  },
  methods: {
    async getStart() {
      this.countryInfo = await api.getCountryByCode(this.countryCode as string)
      this.holidays = await api.getCountryYearHolidays(
        this.selectedYear,
        this.countryCode as string,
      )
    },
    async setHolidaysByYear() {
      this.holidays = await api.getCountryYearHolidays(
        this.selectedYear,
        this.countryCode as string,
      )
    },
    setYear(year: number) {
      if (year === this.selectedYear) {
        return
      }
      this.selectedYear = year
      this.setHolidaysByYear()
    },
  },
  mounted() {
    this.getStart()
  },
}
</script>

<template>
  <main class="p-10">
    <section>
      <p class="text-xl font-bold mb-5">{{ countryInfo.commonName }}</p>
      <HolidaysList class="mb-5" :holidays="holidays" />
      <YearsPagination :years="years" :selectedYear="selectedYear" :setYear="setYear" />
    </section>
  </main>
</template>
