<script setup>
// route
const route = useRoute();
// composable
const { hello } = useComposable();
hello(`${route.name}`);
// plugins
const { $helloPlugins } = useNuxtApp();
$helloPlugins(`${route.name}`);
</script>

<template>
  <div>Main Page</div>
</template>

<style lang="scss" scoped></style>
