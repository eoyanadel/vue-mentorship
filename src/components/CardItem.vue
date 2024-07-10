<script setup lang="ts">
import { Movie } from '../../types/movie';

const props = defineProps<{
    movieItem: Movie
}>();
</script>
<template>
    <div class="card-item">
        <div>
            <!-- {{ props.movieItem.image_path }} -->
            <img :src="props.movieItem.image_path" :alt="props.movieItem.image_path" width="300px" height="500px">
        </div>
        <div>
            {{ props.movieItem.title }}
        </div>        
    </div>
</template>