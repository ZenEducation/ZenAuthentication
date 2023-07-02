
export default defineNuxtRouteMiddleware((to, from) => {
  if (!localStorage.getItem('authToken')) {
    return navigateTo("/");
  }
});
