
import { InputCart } from '../../components';
<template>
    <section class="d-flex container justify-content-between row mx-auto">
        <div class="col p-4 ">
            <div class="border border-2 rounded-4"
                style="background-image: url('https://source.unsplash.com/random/300×400');background-position: center;background-size: cover; height: 300px;">
            </div>
        </div>
        <div class="col-5 p-4">
            <h4 class="fw-bold">Nama Product</h4>
            <p>rating</p>
            <p class="fw-bold">Harga</p>
            <hr class="my-1" />
            <div>
                <span class="fw-bold">Detail</span>
                <hr class="my-1" />
                <p class="text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                    aperiam ipsam, vel modi voluptate debitis commodi. Earum excepturi,
                    ipsa nesciunt animi tempore laborum incidunt adipisci eum nihil eos
                    vero architecto!
                </p>
            </div>
        </div>
        <div class="col p-3">
            <div class="bg-white h-100 p-4 rounded-4">
                <p class="fw-bold mb-2">Total Cart</p>
                <hr class="my-0">
                <div class="d-flex justify-content-center  align-items-center my-3 gap-2">
                    <InputCart />
                    <span class="fs-6">stock : 50</span>
                </div>
                <hr class="mb-2">
                <div class="d-flex justify-content-between ">
                    <p class="mb-2">Sub Total</p>
                    <p class="mb-2 fw-bold ">Harga</p>
                </div>
                <hr class="my-0">
                <button class="btn btn-success w-100 mt-5">Add to Cart</button>
            </div>
        </div>
    </section>
</template>
<script>
import { InputCart } from '@/components';
export default {
    components: { InputCart },
}
</script>