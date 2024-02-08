<template>
    <NavBar />
    test
    <Footer />
</template>

<script>
import { NavBar, Footer } from '@/components';
export default {
    components: { NavBar, Footer },
    mounted() {
        console.log('Component mounted.');
    },
}
</script>
