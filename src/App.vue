<script lang="ts" setup>
  import { onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import Magnify from "vue-material-design-icons/Magnify.vue";
  import HomeOutline from "vue-material-design-icons/HomeOutline.vue";
  import TrendingUp from "vue-material-design-icons/TrendingUp.vue";
  import Television from "vue-material-design-icons/Television.vue";
  import MovieOutline from "vue-material-design-icons/MovieOutline.vue";
  import Plus from "vue-material-design-icons/Plus.vue";
  import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

  import { useMovieStore } from "@/stores/movie";
  import movieList from "@/db/movieList";
  import MovieDetail from "@/components/MovieDetail.vue";
  import VideoCarousel from "@/components/VideoCarousel.vue";

  const useMovie = useMovieStore();
  const { movie, showFullVide } = storeToRefs(useMovie);

  onMounted(() => {
    setTimeout(() => {
      movie.value = movieList[0][0];
    }, 100);
  });
</script>

<template>
  <div class="fixed h-screen w-full bg-black">
    <!-- SideBar Nav -->
    <div
      v-if="!showFullVide"
      id="sideNav"
      class="relative z-40 flex h-screen w-[120px] items-center bg-black">
      <img
        alt=""
        class="absolute top-0 ml-10 mt-10 w-[35px]"
        src="/images/netflix-logo.png" />

      <!-- Icons Menu -->
      <div>
        <div class="mx-10 my-6 py-2">
          <Magnify
            :size="40"
            class="cursor-pointer"
            fill-color="#fff" />
        </div>
        <div class="mx-10 my-6 border-b-4 border-b-red-500 py-2">
          <HomeOutline
            :size="40"
            class="cursor-pointer"
            fill-color="#fff" />
        </div>
        <div class="mx-10 my-6 py-2">
          <TrendingUp
            :size="40"
            class="cursor-pointer"
            fill-color="#fff" />
        </div>
        <div class="mx-10 my-6 py-2">
          <Television
            :size="40"
            class="cursor-pointer"
            fill-color="#fff" />
        </div>
        <div class="mx-10 my-6 py-2">
          <MovieOutline
            :size="40"
            class="cursor-pointer"
            fill-color="#fff" />
        </div>
        <div class="mx-10 my-6 py-2">
          <Plus
            :size="40"
            class="cursor-pointer"
            fill-color="#fff" />
        </div>
      </div>
    </div>

    <div v-if="!showFullVide">
      <div
        class="fixed right-0 top-0 z-20 flex h-1/2 w-full bg-black bg-clip-border pl-[120px]">
        <div
          class="absolute left-[120px] right-0 top-0 z-30 h-[600px] w-[77%] bg-gradient-to-r from-black via-black"></div>
        <MovieDetail
          v-if="movie.name"
          :movie="movie" />

        <video
          v-if="movie.name"
          :src="`/movies/${movie.name}.mp4`"
          autoplay
          class="absolute right-0 top-0 z-0 h-[600px]"
          loop></video>
      </div>

      <div
        class="fixed bottom-0 right-0 z-30 h-[55%] w-full overflow-y-auto pl-[120px]">
        <VideoCarousel
          :movies="movieList[0]"
          category="Popular Movie"
          class="py-14" />
        <VideoCarousel
          :movies="movieList[1]"
          category="Horror Movie"
          class="pb-14" />
        <VideoCarousel
          :movies="movieList[2]"
          category="Featured Movie"
          class="pb-32" />
      </div>
    </div>

    <div
      v-if="!showFullVide"
      class="absolute bottom-0 left-[120px] right-0 z-20 h-[70%] w-full bg-gradient-to-t from-black via-black"></div>

    <div v-if="showFullVide">
      <div
        class="absolute z-50 m-4 cursor-pointer rounded-full bg-white bg-opacity-50 p-2"
        @click="() => (showFullVide = false)">
        <ChevronLeft
          :size="40"
          fill-color="#fff" />
      </div>

      <video
        v-if="movie.name"
        :src="`/movies/${movie.name}.mp4`"
        autoplay
        class="object-fit absolute z-0 h-full w-screen"
        controls
        loop></video>
    </div>
  </div>
</template>
