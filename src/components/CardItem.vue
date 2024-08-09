<script setup lang="ts">
import { Movie } from '../../types/movie';
import { BASE_IMAGE_URL } from '../globalConstants';

const props = defineProps<{
    movieItem: Movie
}>();

const movie = props.movieItem;
// console.log(movie);
</script>
<template>
    <div class="card-item">
        <div>
            <!-- {{ props.movieItem.image_path }} -->
            <img :src="BASE_IMAGE_URL + movie.poster_path" :alt="movie.image_path" class="poster">
        </div>
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
        <div>
            <button>Add</button>
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
}

.poster {    
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
</style>