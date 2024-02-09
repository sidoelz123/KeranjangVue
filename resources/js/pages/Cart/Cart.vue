<template>
    <section class="container">
        <h2 class="fw-bold mb-3">
            Cart
        </h2>
        <div class="row">
            <div class="col-8 pe-3 ">
                <div class="rounded-3 bg-white p-3 d-flex position-relative justify-content-between  ">
                    <div class="d-flex gap-4 ">
                        <div class="rounded-2 "
                            style="background-image: url('https://source.unsplash.com/random/300×400');background-position: center;background-size: cover; height: 100px; width: 100px;">
                        </div>
                        <div class="fs-4">Judul</div>
                    </div>
                    <div class="fw-bold ">Harga</div>
                    <div class="position-absolute bottom-0 end-0 pe-3 pb-3 d-flex gap-2">
                        <button class="btn btn-outline-danger px-2 py-0"><font-awesome-icon icon="trash-can" /></button>
                        <InputCart />
                    </div>
                </div>
            </div>
            <div class="col-4 p-5 rounded-3 bg-white ">
                <h4>Shopping Summary</h4>
                <div class="d-flex justify-content-between ">
                    <p>Total</p>
                    <p>Harga</p>
                </div>
                <hr>
                <button class="btn btn-success w-100 ">Buy</button>
            </div>
        </div>
    </section>
</template>

<script>
import { InputCart } from '@/components';

export default {
    components: { InputCart }
}
</script>
