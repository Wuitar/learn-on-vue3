<template>
    <div>
        <router-link to="/">Back</router-link>
    </div>
    <p>
        <button @click="$store.commit('add')">Add counter</button>
    </p>
    <p>Vuex Count::{{ $store.state.count }}</p>
</template>

<script>
export default {

}
</script>

<style>
</style>