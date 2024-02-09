<template>
    <NavBar />
    <section class="bg-body-secondary vh-100" style="padding-top: 6em;">
        <router-view />
    </section>
    <Footer />
</template>
<script>
import { NavBar, Footer } from '@/components';
export default {
    components: { NavBar, Footer },
}
</script>
<style>
@import '@css/app.css'
</style>