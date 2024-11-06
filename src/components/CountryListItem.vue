<script setup lang="ts">
import type { PropType } from 'vue'
import type { CountryShortInfo } from '../services/types'
import router from '@/router'

defineProps({
  country: {
    type: Object as PropType<CountryShortInfo>,
    required: true,
  },
})

const handleClick = (countryCode: string) => {
  router.push({ name: 'country', params: { countryCode } })
}
</script>

<template>
  <li class="border">
    <button @click="() => handleClick(country.countryCode)" class="w-full h-12">
      {{ country.name }}
    </button>
  </li>
</template>
