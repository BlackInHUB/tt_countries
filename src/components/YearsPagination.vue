<script setup lang="ts">
defineProps({
  years: {
    type: Array<number>,
    required: true,
  },
  selectedYear: {
    type: Number,
    required: true,
  },
  setYear: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <ul class="flex gap-10 w-full justify-center">
    <li
      class="border"
      :class="item === selectedYear ? 'border-red-500' : ''"
      v-for="(item, i) in years"
      :key="i"
    >
      <button @click="setYear(item)" class="px-5 py-3">
        {{ item }}
      </button>
    </li>
  </ul>
</template>
