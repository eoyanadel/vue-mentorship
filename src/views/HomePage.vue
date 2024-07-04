<script setup lang="ts">
import CardItem from '../components/CardItem.vue';
import dummyMovies from '../../dummy/dummy-movies';
</script>
<template>
    <!-- <h1>Home Page</h1> -->
    <div class="search-container">
        <input type="text" id="search" name="search" placeholder="Search">
        <button>Search</button>            
    </div>    
    <div class="card-container">
        <CardItem 
            v-for="(movie, index) in dummyMovies" :key="index"
            :movie-item="movie"
        />            
    </div>    
</template>