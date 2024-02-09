<template>
    <div class="container ">
        <div class="w-50 mx-auto mb-5 ">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success " type="submit">
                    <font-awesome-icon icon="magnifying-glass" />
                </button>
            </form>
        </div>
        <div class="d-flex gap-3">
            <Card />
        </div>
    </div>
</template>

<script>
import { Card } from '@/components';
export default {
    components: { Card },
}
</script>
<style>
@import '@css/app.css'
</style>
