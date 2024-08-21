<script setup lang="ts">
import { computed, ref } from 'vue';
import CardItem from '../components/CardItem.vue';
import { useMovieStore } from '../stores/movieStore';

const movieStore = useMovieStore();

const moviesFav = computed(() => movieStore.$state.moviesFav);
</script>

<template>
    <h2 v-if="!moviesFav.length">There are not Favorites Movies</h2>
    <div class="card-container">
        <CardItem 
            v-for="(movie, index) in moviesFav" :key="index"
            :movie-item="movie"
        />            
    </div>
</template>
<style scoped>
.card-container {  
    background-color: #464444;
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
}
</style>