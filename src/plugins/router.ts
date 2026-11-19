import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory("/uevshaid/"),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/pages/AboutPage.vue")
        }
    ]
});

export default router;
