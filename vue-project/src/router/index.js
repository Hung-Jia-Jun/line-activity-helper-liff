import { createWebHistory, createRouter } from "vue-router";
import CreateActivity from "@/components/CreateActivity.vue";

import Activity from "@/components/Activity.vue";
import PublishActivity from "@/components/PublishActivity.vue";
const routes = [
    { 
        path: "/",
        name: "CreateActivity",
        component: CreateActivity
    },
    { 
        path: "/activity/:_activity",
        name: "Activity",
        component: Activity,
    },
    { 
        path: "/publish_activity",
        name: "PublishActivity",
        component: PublishActivity,
        props: route => ({ query: route.query.q })
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
