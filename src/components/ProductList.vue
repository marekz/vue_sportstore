<template>
    <div>
        <div v-for="product in products" v-bind:key="product.id" class="card m-1 p-1 bg-light">
            <h4>
                {{ product.name }}
                <span class="badge badge-pill badge-primary float-right">
                    {{ product.price | currency }}
                </span>
            </h4>
            <div class="card-text bg-white p-1">
                {{ product.description }}
                <button class="btn btn-success btn-sm float-right"
                        v-on:click="handleProductAdd(product)">
                    Dodaj do koszyka
                </button>
            </div>
        </div>
        <page-controls />
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import PageControls from "./PageControls";
export default {
        components: { PageControls },
        computed: {
                    ...mapGetters({
                        products: "processedProducts"
                    })
        },
        filters: {
            currency(value) {
                return new Intl.NumberFormat("pl-PL",
                { style: "currency", currency: "PLN" }).format(value);
            }
        },
        methods: {
            ...mapMutations({ addProduct: "addProduct"}),
            handleProductAdd(product) {
                this.addProduct(product);
                this.$router.push("/cart")
            }
        }
}
</script>