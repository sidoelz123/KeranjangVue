import { createRouter, createWebHistory } from "vue-router";
import { ProductPage, CartPage } from "../pages";

const routes = [
    { path: "/", component: ProductPage },
    { path: "/cart", component: CartPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
