<script setup lang="ts">
import type { CountryHoliday } from '@/services/types'
import type { PropType } from 'vue'

defineProps({
  holiday: {
    type: Object as PropType<CountryHoliday>,
    required: true,
  },
})
</script>

<template>
  <li
    class="flex flex-col gap-2 p-5 border border-amber-300 rounded bg-gray-800 text-sm text-amber-300"
  >
    <p class="font-bold"><span>Holiday: </span>{{ holiday.name }}</p>
    <p class="font-bold"><span>Date: </span>{{ holiday.date }}</p>
  </li>
</template>
