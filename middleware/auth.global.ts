export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`middleware : ${to.path}`);
  console.log(`middleware : ${from.path}`);

  // const isLoggedin = false;

  // if (!isLoggedin) {
  //   navigateTo("/");
  // }
  // console.log(to);
  // console.log(from);
});
