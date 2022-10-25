import { createWebHistory, createRouter } from "vue-router";
import CreateActivity from "@/components/CreateActivity.vue";

import Activity from "@/components/Activity.vue";
import PublishActivitivy from "@/components/PublishActivitivy.vue";
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
        path: "/publish_activitivy",
        name: "PublishActivitivy",
        component: PublishActivitivy,
        props: route => ({ query: route.query.q })
    },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
