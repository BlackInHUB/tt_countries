<script lang="ts">
import CountriesList from '@/components/CountriesList.vue'
import SearchInput from '@/components/SearchInput.vue'
import api from '@/services/api.js'
import type { CountryShortInfo } from '@/services/types'

export default {
  data() {
    return {
      availableCountries: [] as CountryShortInfo[],
      searchValue: '',
    }
  },
  components: {
    CountriesList,
    SearchInput,
  },
  methods: {
    handleSearch(e: { target: { value: string } }) {
      this.searchValue = e.target.value
    },
    async getAvailableCountries() {
      try {
        this.availableCountries = await api.getAvailableCountries()
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.getAvailableCountries()
  },
}
</script>

<template>
  <main class="flex p-8">
    <section class="flex flex-col gap-5 w-[40%]">
      <SearchInput v-model="searchValue" @input="handleSearch" />
      <h2 class="text-xl font-bold">Countries List</h2>
      <CountriesList :countries="availableCountries.filter((c) => c.name.includes(searchValue))" />
    </section>
    <section class=""></section>
  </main>
</template>
