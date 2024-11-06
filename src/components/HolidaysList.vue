<script setup lang="ts">
import type { CountryHoliday } from '@/services/types'
import type { PropType } from 'vue'
import HolidaysListItem from './HolidaysListItem.vue'

defineProps({
  holidays: {
    type: Array as PropType<CountryHoliday[]>,
    required: true,
  },
})
</script>

<template>
  <ul class="flex flex-col gap-5 w-[50%]">
    <HolidaysListItem v-for="item in holidays" :key="item.name" :holiday="item" />
  </ul>
</template>
