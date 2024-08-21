<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>    
  <main>
    <NavBar />
    <div class="body-container">      
      <Suspense>
        <RouterView />      
      </Suspense>       
    </div>    
  </main>
</template>
<style scoped>
.body-container {
  padding-left: 20px;
  padding-right: 20px;
}
</style> 
