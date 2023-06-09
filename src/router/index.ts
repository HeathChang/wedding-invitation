import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: { layout: "default" },
    component: () => import("@/views/main/index.vue"),
  },
  {
    path: "/icons",
    name: "icons",
    meta: { layout: "blank" },
    component: () => import("@/views/icons/index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
