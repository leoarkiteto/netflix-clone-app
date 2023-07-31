<script lang="ts" setup>
  type Movie = {
    name: string;
    description: string;
    year: string;
    genre: {
      one: string;
      two: string;
      three: string;
    };
  };
  type Props = {
    movie: Movie;
  };

  defineProps<Props>();
</script>

<template>
  <div
    v-if="movie.name"
    class="z-40 w-[53%] pt-20 text-white">
    <p class="font-serif text-[55px] font-semibold">{{ movie.name }}</p>

    <div class="flex items-center pt-4 text-lg">
      <p>{{ movie.year }}</p>
      <div class="relative">
        <span class="absolute -top-[12px] left-[2px] text-[40px]">.</span>
        <span class="pl-4">{{ movie.genre.one }}</span>
      </div>
      <div class="relative">
        <span class="absolute -top-[12px] left-[2px] text-[40px]">.</span>
        <span class="pl-4">{{ movie.genre.two }}</span>
      </div>
      <div class="relative">
        <span class="absolute -top-[12px] left-[2px] text-[40px]">.</span>
        <span class="pl-4">{{ movie.genre.three }}</span>
      </div>
    </div>

    <p class="text-shadow pt-6 text-2xl">{{ movie.description }}</p>
  </div>
</template>

<style scoped>
  .text-shadow {
    text-shadow: 1px 1px black;
  }
</style>
