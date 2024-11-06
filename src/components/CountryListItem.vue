<script setup lang="ts">
import type { PropType } from 'vue'
import type { CountryShortInfo } from '../services/types'

defineProps({
  country: {
    type: Object as PropType<CountryShortInfo>,
    required: true,
  },
})
</script>

<template>
  <li class="border" :key="country.countryCode">
    <button class="w-full h-12">{{ country.name }}</button>
  </li>
</template>
