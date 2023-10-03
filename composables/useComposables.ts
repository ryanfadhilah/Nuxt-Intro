export const useComposable = () => {
  function hello(text: string) {
    console.log(`Composables : ${text} `);
  }
  return {
    hello,
  };
};
