<script setup lang="ts">
import type { CountryWithHoliday } from '@/services/types'
import type { PropType } from 'vue'

defineProps({
  country: {
    type: Object as PropType<CountryWithHoliday>,
    required: true,
  },
})
</script>

<template>
  <li
    class="flex flex-col gap-5 p-10 border border-amber-300 rounded bg-gray-800 text-xl text-amber-500"
  >
    <p class="font-bold"><span>Country: </span>{{ country.name }}</p>
    <p class="font-bold"><span>Next holiday: </span>{{ country.holidayName }}</p>
    <p class="font-bold"><span>Holiday date: </span>{{ country.holidayDate }}</p>
  </li>
</template>
