<script setup>
const route = useRoute();
console.log(route.params.id);
</script>

<template>
  <div>user id {{ $route.params.id }}</div>
</template>

<style lang="scss" scoped></style>
