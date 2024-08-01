<script setup lang="ts">
import { Movie } from '../../types/movie';
import { BASE_IMAGE_URL } from '../globalContants';

const props = defineProps<{
    movieItem: Movie
}>();

const movie = props.movieItem;
console.log(movie);
</script>
<template>
    <div class="card-item">
        <div>
            <!-- {{ props.movieItem.image_path }} -->
            <img :src="BASE_IMAGE_URL + props.movieItem.poster_path" :alt="props.movieItem.image_path" class="poster">
        </div>
        <div class="title">
            {{ props.movieItem.title }}
        </div>
        <div class="release-date">
            {{ props.movieItem.release_date }}
        </div>
        <div class="overview">
            <p>
                {{ props.movieItem.overview }}
            </p>
        </div>
    </div>
</template>
<style  scoped>
.card-item {
    width: 20%;
    margin: 20px;
    /* text-align: center; */
    flex-basis: content;  
}

.card-item:hover {
  background-color: #555454;
  cursor: pointer;
}

.poster {
    width: 300px;
    height: 450px;
    border-radius: 4px;
}

.title {    
    font-weight: bold;
    font-size: large;
    word-wrap: break-word;
    width: 300px;
}

.release-date {
    font-size: x-small;
}

.overview {
    word-wrap: break-word;
    width: 300px;
    font-size: smaller;
}
</style>