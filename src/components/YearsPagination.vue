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
      class="border text-amber-300 font-bold rounded border-amber-300 hover:border-amber-500 transition-all hover:text-amber-500"
      :class="item === selectedYear ? 'border-amber-500 text-amber-500 bg-gray-700' : ''"
      v-for="(item, i) in years"
      :key="i"
    >
      <button
        @click="setYear(item)"
        class="px-5 py-2"
        :class="item === selectedYear ? 'text-amber-500' : ''"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>
