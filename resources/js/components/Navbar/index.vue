<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container mx-auto ">
            <router-link to="/" class="d-flex gap-1 align-items-center fs-5 text-decoration-none">
                <font-awesome-icon icon="truck-fast" class="navbar-brand " />
                <span class="fw-bold font-monospace text-body  ">OyiShop</span>
            </router-link>
            <router-link to="/cart">
                <button class="btn btn-light  position-relative ">
                    <font-awesome-icon icon="cart-shopping" />
                    <p
                        class="z-1 position-absolute top-0 end-0 me-1 bg-danger rounded text-white fw-bold fs-7 border border-white px-1">
                        0
                    </p>
                </button>
            </router-link>
        </div>
    </nav>
</template>
<script>
</script>
<style>
@import 'navbar.css';
</style>