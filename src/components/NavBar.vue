<script setup lang="ts">
</script>
<template>
    <div class="nav-container">
        <div class="nav-logo">
            <img src="../assets/logo.png" alt="logo mentorship" width="32px" height="32px">
        </div>
        <div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/fav">Favorites</RouterLink>
            </nav>
        </div>
    </div>
</template>
<style scoped>
.nav-container {
  background-color: #4d4d52;
  display: flex;
  padding: 10px 0 7px 10px;
}

.nav-logo {
  padding-right: 10px;
}
</style>