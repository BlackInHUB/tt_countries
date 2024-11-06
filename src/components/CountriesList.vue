<script setup lang="ts">
import type { CountryShortInfo } from '@/services/types'
import type { PropType } from 'vue'
import CountryListItem from './CountryListItem.vue'

defineProps({
  countries: {
    type: Object as PropType<CountryShortInfo[]>,
    required: true,
  },
  searchValue: {
    type: String,
  },
})
</script>

<template>
  <ul class="flex flex-col gap-5">
    <CountryListItem v-for="item in countries" :key="item.countryCode" :country="item" />
  </ul>
</template>
