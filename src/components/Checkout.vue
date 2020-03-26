<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col bg-dark text-white">
                    <a class="navbar-brand">SKLEP SPORTOWY</a>
                </div>
            </div>
        </div>
        <div class="m-2">
            <div class="form-group m-2">
                <label>Imię</label>
                <input v-model="name" class="form-control" />
            </div>
        </div>
        <div class="text-center">
            <router-link to="/cart" class="btn btn-secondary m-1">
                Powrót
            </router-link>
            <button class="btn btn-primary m-1" v-on:click="submitOrder">
                Złóż zamówienie
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            name: null
        }
    },
    methods: {
        submitOrder() {
            // todo: Zapisz zamówienie
        }
    }
}
</script>