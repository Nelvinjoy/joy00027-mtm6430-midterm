import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import contact from "./views/contact.vue";
import testimonials from "./views/testimonials.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path:"/contact",
      name: "contact",
      component: contact
    },
    {
      path:"/testimonials",
      name: "testimonials",
      component: testimonials
    }
  ]
});
