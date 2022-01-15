<template>
  <button @click="modalOpen = true">popup modal</button>
  <modal v-model="modalOpen"></modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  components: { Modal },
  data() {
    return {
      modalOpen: false
    }
  }

}
</script>

<style>
</style>