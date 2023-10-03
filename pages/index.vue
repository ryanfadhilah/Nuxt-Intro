<script setup>
const { hello } = useFunction();
const route = useRoute();
hello(`${route.name}`);
</script>

<template>
  <div>Main Page</div>
</template>

<style lang="scss" scoped></style>
