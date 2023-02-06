<script setup>
import TechnologyCard from "./TechnologyCard.vue";

const experiencedList = [""];
</script>

<template>
  <div class="container px-4 py-5">
    <h1 class="pb-3 text-center">Technologies</h1>

    <!--Three cell grid (Experienced, Familiar, Learning)-->
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <!--Experienced Card-->
      <TechnologyCard
        icon="bi-star-fill"
        title="Experienced"
        :technologies="[
          'Python',
          'Java',
          'JavaScript',
          'HTML',
          'Vue',
          'Kotlin',
          'Spring Framework',
          'Web Scraping',
        ]"
      />

      <!--Familiar Card-->
      <TechnologyCard
        icon="bi-check-square-fill"
        title="Familiar"
        :technologies="[
          'C',
          'Flask',
          'React',
          'FastAPI',
          'PHP',
          'MySQL',
          'PostgreSQL',
          'Bootstrap',
          'REST APIs',
          'JSON',
          'CSS',
          'Google Cloud',
          'Microsoft Azure',
        ]"
      />

      <!--Learning-->
      <TechnologyCard
        icon="bi-book-fill"
        title="Learning"
        :technologies="['Docker', 'CI/CD']"
      />
    </div>
  </div>
</template>

<style></style>
