<script setup lang="ts">
import { type PropType } from 'vue'
import type { CountryWithHoliday } from '../services/types'
import RandomCountriesWidgetItem from './RandomCountriesWidgetItem.vue'

defineProps({
  countries: {
    type: Array as PropType<Array<CountryWithHoliday>>,
    required: true,
  },
})
</script>

<template>
  <ul class="flex flex-col gap-5">
    <RandomCountriesWidgetItem v-for="item in countries" :key="item.countryCode" :country="item" />
  </ul>
</template>
