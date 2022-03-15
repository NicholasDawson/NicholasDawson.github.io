<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark-purple">
        <div class="container-fluid justify-content-between">
            <a class="navbar-brand text-center display-1 d-md-none" href="#">
                Nick Dawson
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-lg-0 justify-content-center w-100">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
    /* Make navbar text darker to make contrast acceptable */
    .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
        color: black;
    }

    .navbar-light .navbar-nav .nav-link {
        color: rgba(0, 0, 0, .67);
    }
</style>