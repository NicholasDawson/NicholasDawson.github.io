<script setup>
const props = defineProps({
    icon: String,
    title: String,
    technologies: Array
})

</script>

<template>
    <div class="col">
        <div class="container align-items-start p-3 shadow rounded">
            <div class="row">
                <h4 class="fw-bold col">
                    <i :class="icon"></i>
                    {{ title }}
                </h4>
            </div>

            <div>
                <div v-for="item in technologies" class="badge bg-orange mx-1">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
i {
    font-size: 1.25em;
}
</style>