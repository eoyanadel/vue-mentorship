<script setup lang="ts">
import { computed, ref } from 'vue';
import CardItem from '../components/CardItem.vue';
//import dummyMovies from '../../dummy/dummy-movies';
//import { Movie } from '../../types/movie';
//import movieService from '../services/movieService';
import { useMovieStore } from '../stores/movieStore';

const movieStore = useMovieStore();

const movies = computed(() => movieStore.$state.movies);
const query = ref<string>('');
const hasSearched = ref<boolean>(false);

if(movies.value.length == 0 || hasSearched) {
  await movieStore.loadMoviesByPopularity();
};

// onBeforeMount(async () => {
//   // console.log('loading initial movies...');
//   movies.value = await movieService.getMoviesByPopularity();
//   // console.log(movies.value);
//   }); 

const searchMovies = async () => {  
  if(query.value == '') {
    alert('You must enter a criteria to search.');
    return;
  }

  console.log('searching with: ', query.value);
  //movies.value = [];
  //movies.value = await movieService.searchMovieByQuery(query.value) as Movie[];
  await movieStore.searchMovies(query.value);
  console.log(movies.value);
  hasSearched.value = true;
  query.value = '';
};

</script>
<template>    
    <div class="search-container">
        <input type="text" id="search" name="search" placeholder="Search" v-model="query">
        <button
          @click="searchMovies"
        >
          Search
        </button>            
    </div>
    <h2 v-if="!movies.length">There are not results for that searching</h2>    
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