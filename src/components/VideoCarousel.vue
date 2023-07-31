<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { useMovieStore } from '@/stores/movie';

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
    category: string;
    movies: Movie[];
  };

  const useMovie = useMovieStore();
  const { movie, showFullVide } = storeToRefs(useMovie);
  const currentSlide = ref(0);

  const props = defineProps<Props>();
  const { movies, category } = toRefs(props);

  function currentSlideObject(slide: Movie, index: number) {
    if (index === currentSlide.value) {
      movie.value = slide;
    }
  }

  function fullScreenVideo(index: number) {
    currentSlide.value = index;

    setTimeout(() => {
      showFullVide.value = true;
    }, 500);
  }
</script>

<template>
  <div class="relative min-w-[1200px]">
    <div class="mr-6 flex justify-between">
      <p
        class="flex cursor-pointer items-center text-2xl font-semibold text-white">
        {{ category }}
      </p>
    </div>

    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-scroll="1"
      :items-to-show="8"
      :transition="500"
      :wrap-around="true"
      class="bg-transparent"
      snapAlign="start"
      ><Slide
        v-for="(slide, index) in movies"
        :key="slide"
        class="flex items-center bg-transparent object-cover text-white">
        <div
          :class="
            currentSlide !== index
              ? 'border-4 border-transparent'
              : 'border-4 border-white', currentSlideObject(slide, index)
          "
          class="h-full cursor-pointer object-cover hover:brightness-125"
          @click="() => fullScreenVideo(index)">
          <img
            :src="`/images/${slide.name}.png`"
            alt=""
            class="pointer-events-none z-[-1] h-full"
            style="user-select: none" />
        </div> </Slide
    >

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
  .carousel__prev,
  .carousel__next,
  .carousel__prev:hover,
  .carousel__next:hover {
    color: #fff;
  }
</style>
