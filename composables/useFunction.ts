export const useFunction = () => {
  function hello(text: string) {
    console.log(`Hello fron ${text} page`);
  }
  return {
    hello,
  };
};
