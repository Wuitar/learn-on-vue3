<template>
    <div>
        <teleport to="body">
            <div v-if="modelValue" class="modal">
                <div>
                    This is a MODAL
                    <button @click="$emit('update:modelValue', false)">Close</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
}
</script>

<style scoped>
.modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
}
</style>