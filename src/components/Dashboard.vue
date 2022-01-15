<template>
    <p>Vuex Count::{{ $store.state.count }}</p>
    <ul>
        <li>
            <router-link to="/todos">counter</router-link>
        </li>
        <li>
            <router-link to="/composition">composition</router-link>
        </li>
        <li>
            <router-link to="teleport">teleport</router-link>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style>
</style>