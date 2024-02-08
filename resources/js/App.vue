<template>
    <NavBar />
    <router-view />
    <Footer />
</template>
<script>
import { NavBar, Footer } from '@/components';
export default {
    components: { NavBar, Footer },
}
</script>