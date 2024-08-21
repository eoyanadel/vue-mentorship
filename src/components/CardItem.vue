<script setup lang="ts">
import { Movie } from '../../types/movie';
import { BASE_IMAGE_URL } from '../globalConstants';
import { useMovieStore } from '../stores/movieStore';

const props = defineProps<{
    movieItem: Movie
}>();

const movieStore = useMovieStore();
const movie = props.movieItem;

const AddMovie = (movie: Movie) => {
    console.log('Adding movie to Fav...');
    movieStore.addMovieToFav(movie);
};
</script>
<template>
    <div class="card-item">
        <div>
            <!-- {{ props.movieItem.image_path }} -->
            <img
                v-if="movie.poster_path" 
                :src="BASE_IMAGE_URL + movie.poster_path" :alt="movie.image_path" class="poster">
            <img
                v-else
                src="../assets/No_Image_Available.svg" alt="noImage" class="poster">
        </div>
        <div>
            <button 
                class="card-button"
                @click="AddMovie(movie)"
            >
                Add
            </button>
        </div>
        <!-- <div>
            <button class="card-button">Remove</button>
        </div> -->
        <div class="title">
            {{ movie.title }}
        </div>
        <div class="release-date">
            {{ movie.release_date }}
        </div>
        <div class="overview">
            <p>
                {{ movie.overview }}
            </p>
        </div>        
    </div>    
</template>
<style scoped>
.card-item {
    width: 300px;
    margin: 20px;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    flex-basis: content;
}

.card-item:hover {
    background-color: #555454;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
}

.poster {    
    width: 300px;
    height: 450px;
    border-radius: 4px;
}

.title {    
    width: 300px;
    font-weight: bold;
    font-size: large;
    word-wrap: break-word;    
}

.release-date {
    font-size: x-small;
}

.overview {
    word-wrap: break-word;
    width: 300px;
    font-size: smaller;
    flex-grow: 1;
}
.card-button {
    width: 100%;
}
</style>