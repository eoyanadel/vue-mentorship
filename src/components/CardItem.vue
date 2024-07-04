<script setup lang="ts">
import { Movie } from '../../types/movie';

const props = defineProps<{
    movieItem: Movie
}>();
</script>
<template>
    <div class="card-item">
        {{ props.movieItem.title }}
    </div>
</template>