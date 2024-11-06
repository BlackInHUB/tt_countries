<script lang="ts">
import CountriesList from '@/components/CountriesList.vue'
import RandomCountriesWidget from '@/components/RandomCountriesWidget.vue'
import SearchInput from '@/components/SearchInput.vue'
import api from '@/services/api.js'
import type { CountryShortInfo, CountryWithHoliday } from '@/services/types'

export default {
  data() {
    return {
      availableCountries: [] as Array<CountryShortInfo>,
      searchValue: '',
      randomCountries: [] as Array<CountryWithHoliday>,
    }
  },
  components: {
    CountriesList,
    SearchInput,
    RandomCountriesWidget,
  },
  methods: {
    handleSearch(e: { target: { value: string } }) {
      this.searchValue = e.target.value
    },
    async setRandomCountries() {
      for (let i = 0; i < 3; i++) {
        const randomCountry =
          this.availableCountries[Math.floor(Math.random() * this.availableCountries.length)]
        const randomCountryHolidays = await api.getCountryNextHoliday(randomCountry.countryCode)

        this.randomCountries.push({
          ...randomCountry,
          holidayName: randomCountryHolidays[0].name,
          holidayDate: randomCountryHolidays[0].date,
        })
      }
    },
    async getStart() {
      try {
        this.availableCountries = await api.getAvailableCountries()
        this.setRandomCountries()
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getStart()
  },
}
</script>

<template>
  <main class="flex p-10 gap-[100px]">
    <section class="w-[40%]">
      <SearchInput class="mb-5" v-model="searchValue" @input="handleSearch" />
      <p class="text-xl font-bold mb-5">Countries List</p>
      <CountriesList :countries="availableCountries.filter((c) => c.name.includes(searchValue))" />
    </section>
    <section class="w-full">
      <div class="p-5 border">
        <p class="text-xl font-bold mb-5">Random Countries Widget</p>
        <RandomCountriesWidget :countries="randomCountries" />
      </div>
    </section>
  </main>
</template>
