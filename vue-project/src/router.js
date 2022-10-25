import { createWebHistory, createRouter } from "vue-router";
import CreateActivity from "./components/CreateActivity.vue";
import Activity from "./components/Activity.vue";
let routes = [
  { path: "/", name: "CreateActivity", component: CreateActivity },
  { path: "/activity", name: "Activity", component: Activity }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
