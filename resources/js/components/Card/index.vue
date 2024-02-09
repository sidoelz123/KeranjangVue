<template>
    <router-link to="/product" class="text-decoration-none" style="cursor: pointer;">
        <div class="card border-2  rounded-3 overflow-hidden" style="width: 18rem;">
            <div
                style="background-image: url('https://source.unsplash.com/random/300×400');background-position: center;background-size: cover; height: 300px;">
            </div>
            <div class="card-body bg-white">
                <h5 class="card-title text-truncate">Card title</h5>
                <p class="card-text m-0 p-0">harga</p>
                <div class="d-flex gap-1  ">
                    <p>rate</p>
                    <p>|</p>
                    <p>stok total</p>
                </div>
            </div>
        </div>
    </router-link>
</template>