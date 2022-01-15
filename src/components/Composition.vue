<template>
    <router-link to="/">Back</router-link>
    <div>{{ msg }}</div>
    <div>{{ data.msg }}</div>
    <p>Vuex Count::{{ $store.state.count }}</p>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
    components: {},
    props: {
        val: {
            type: String,
            default: ""
        },
        list: {
            type: Array,
            default: []
        }
    },
    setup(props) {
        console.log(props);
        const msg = ref("this is composition component")
        const data = reactive({
            msg: "this is composition component too"
        })
        return { data, msg }
    }
}
</script>

<style>
</style>