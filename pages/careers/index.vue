<script setup>
const { hello } = useComposable();
const route = useRoute();
hello(`${route.name}`);
</script>
<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
