<script setup>

</script>

<template>
  <div class="px-4 py-3 my-3 text-center">
    <img
      class="d-block mx-auto mb-4 rounded-circle"
      src="/images/headshot.jpg"
      alt="Headshot"
      width="100"
      height="100"
    />
    <h1 class="display-5 fw-bold">Nick Dawson</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
        Software Engineering student at RIT with a passion for helping everyone with efficient and useful software.
        Loves learning new things and is interested in web development.
      </p>
      <div class="gap-2 d-flex justify-content-center">
        <a href="https://github.com/nicholasdawson" target="_blank" title="GitHub">
          <i class="bi-github social-icon"></i>
        </a>

        <a href="https://www.linkedin.com/in/nicholasmdawson/" target="_blank" title="LinkedIn">
          <i class="bi-linkedin social-icon"></i>
        </a>

        <a href="mailto:contact-website@ndawson.me" target="_blank" title="Email Me">
          <i class="bi-envelope-fill social-icon"></i>
        </a>

        <a href="/resume.pdf" target="_blank" title="Resume">
          <i class="bi-file-earmark-person-fill social-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.social-icon {
  font-size: 50px;
  color: black;
  transition: opacity 0.25s;
}

.social-icon:hover {
  opacity: 75%;
}
</style>