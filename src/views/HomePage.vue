<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import CardItem from '../components/CardItem.vue';
//import dummyMovies from '../../dummy/dummy-movies';
import useMovieService from '../modules/useMovieService';
import { Movie } from '../../types/movie';

const { movieService } = useMovieService();

const movies = ref<Movie[]>([]);

onBeforeMount(async () => {
  console.log('loading initial movies...');
  movies.value = await movieService?.getMoviesByPopularity() as Movie[];   
  console.log(movies.value);
  }); 

const searchMovies = () => {
  console.log('searching...');
};

</script>
<template>
    <!-- <h1>Home Page</h1> -->
    <div class="search-container">
        <input type="text" id="search" name="search" placeholder="Search">
        <button
          @click="searchMovies"
        >
          Search
        </button>            
    </div>    
    <div class="card-container">
        <CardItem 
            v-for="(movie, index) in movies" :key="index"
            :movie-item="movie"
        />            
    </div>    
</template>
<style scoped>
.search-container {
  display: flex;
  padding: 40px 0 40px 0;
}
.card-container {  
  background-color: #464444;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

/* @media (max-width: 768px) {
  .card-container {
    flex-direction: column;
  }
} */
</style>