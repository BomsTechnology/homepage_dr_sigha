import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const NavBar = () => import("@/components/NavBar.vue");
const Footer = () => import("@/components/Footer.vue");
const Home = () => import("@/views/front/Home.vue");
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    isAdmin?: boolean;
    requiresAuth?: boolean;
  }
}
const websiteName: String = "Dr. SIGHA Odette";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      navbar: NavBar,
      footer: Footer,
    },
    meta: {
      title: "Médécine Esthétique au Cameroun | " + websiteName,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// router.beforeEach(async (to, from, next) => {
//   const userStore = useUserStore();
//   if (to.meta.requiresAuth) {
//     if (await userStore.getCurrentUser()) {
//       if (to.meta.isAdmin) {
//         if (userStore.currentUser.type == "admin") {
//           next();
//         } else {
//           next({ name: "home" });
//         }
//       } else {
//         next();
//       }
//     } else {
//       next({ name: "login" });
//     }
//   } else {
//     next();
//   }
// });

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
