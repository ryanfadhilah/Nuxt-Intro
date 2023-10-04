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
  <div></div>
</template>

<style lang="scss" scoped></style>
