export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  return {
    provide: {
      helloPlugins: (text: string) => {
        console.log(`Plugins : ${text} `);
      },
    },
  };
});
