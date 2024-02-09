import { createRouter, createWebHistory } from "vue-router";
import { ProductPage, CartPage, DetailProduct, ErrorPage } from "../pages";

const routes = [
    { path: "/", component: ProductPage },
    { path: "/product", component: DetailProduct },
    { path: "/cart", component: CartPage },
    { path: "/:pathMatch(.*)", component: ErrorPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
