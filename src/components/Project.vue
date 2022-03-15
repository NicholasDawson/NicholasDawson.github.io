<script setup>
const props = defineProps({
    title: String,
    description: String,
    image: String,
    imageAlt: String,
    link: String,
    linkText: {
        type: String,
        default: "View"
    },
    github: String,
    badges: Array,
    reverse: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="container col-xxl-8 px-4 pb-5">
        <div :class="['row align-items-center g-5 py-5', reverse ? 'flex-lg-row' : 'flex-lg-row-reverse']">
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">{{ title }}</h1>
                <p class="lead">{{ description }}</p>
                <div class="mb-3">
                    <div v-for="badge in badges" class="badge bg-orange me-1">{{ badge }}</div>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a v-if="link" :href="link" target="_blank" class="btn btn-outline-light-purple btn-lg px-4 me-md-2">
                        <i class="bi-box-arrow-up-right fs-4"></i> {{ linkText }}
                    </a>
                    <a v-if="github" :href="github" target="_blank" class="btn btn-outline-secondary btn-lg px-4">
                        <i class="bi-github fs-4"></i> GitHub
                    </a>
                </div>
            </div>
            <div class="col-10 col-sm-8 col-lg-6">
                <img
                    :src="image"
                    class="d-block mx-lg-auto img-fluid rounded p-img"
                    :alt="imageAlt"
                    width="700"
                    height="500"
                    loading="lazy"
                />
            </div>
        </div>
    </div>
</template>

<style>
.p-img {
    box-shadow: 0 10px 20px rgba(0,0,0,0.5), 0 6px 6px rgba(0,0,0,0.35);
}
</style>