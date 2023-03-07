<script setup>
import Project from "@/components/Project.vue";
</script>

<template>
  <h1 class="display-3 text-center my-3">My Projects</h1>

  <Project
    title="MathFlow"
    description="A virtual workspace that allows users to interact with math equations in a unique and intuitive way using drag and drop/touch controls in our application. Created at the BrickHack9 Hackathon in 24 hours."
    image="/screenshots/mathflow-demo.gif"
    github="https://github.com/MathFlow-tech/mathflow-tech.github.io"
    link="https://devpost.com/software/variflow"
    linkText="Devpost"
    :badges="[
      'React',
      'React-DnD',
      'TypeScript',
    ]"
    reverse
  />

  <Project
    title="froggy.app"
    description="URL Shortener website that provides analytics to users. Created to learn new technologies and practice full stack web development with my best friend. The backend is private right now for security reasons, ask me if you are interested in the code!"
    image="/screenshots/froggy-screenshot.png"
    github="https://github.com/froggy-app"
    link="https://froggy.app"
    linkText="Try it!"
    :badges="[
      'Go',
      'Gin',
      'React',
      'Redux',
      'CockroachDB',
      'Google App Engine',
    ]"
  />

  <Project
    title="Archiver for Google Photos"
    description="An open-source command line tool to maintain an archive/mirror of your Google Photos library for backup purposes."
    image="/screenshots/archiver-for-google-photos.png"
    github="https://github.com/NicholasDawson/ArchiverForGooglePhotos"
    :badges="['Python', 'Google APIs', 'Multithreading', 'SQLite']"
    reverse
  />

  <Project
    title="Chromebook Repair Management Tool"
    description="An automation software suite that manages and tracks all steps of the Chromebook Repair Process at Portland CT Public Schools."
    image="/screenshots/chromebook-repair-management-tool.png"
    link="/documents/Capstone Presentation.pdf"
    linkText="Presentation"
    :badges="[
      'Python',
      'Google Sheets',
      'PyQt5',
      'Web Automation',
      'PDF Filling',
    ]"
  />

  <Project
    title="Data Extractor for AniList"
    description="A tool used to download most useful metadata and tags from an AniList.co entry."
    image="/screenshots/data-extractor-for-anilist.png"
    github="https://github.com/NicholasDawson/Data-Extractor-for-AniList"
    :badges="['Python', 'Web Scraping', 'Selenium']"
    reverse
  />

  <Project
    title="Dice Roller"
    description="A simple dice rolling app with hand drawn graphics. This was my first Vue web app."
    image="/screenshots/dice-roller.png"
    github="https://github.com/NicholasDawson/VueExamples/tree/main/dice-roller"
    link="https://ndawson.me/VueExamples/dice-roller/dist/"
    :badges="['Vue', 'HTML']"
  />

  <Project
    title="Weather App"
    description="A responsive weather app with hand drawn weather graphics. I am learning Vue and Azure with this app."
    image="/screenshots/weather-app.png"
    github="https://github.com/NicholasDawson/VueExamples/tree/main/weather-app"
    link="https://ndawson.me/VueExamples/weather-app/dist/"
    :badges="['Vue', 'OpenWeather', 'Azure']"
    reverse
  />

  <Project
    title="WUPHF Weather"
    description="A mobile app made for the BrickHack8 hackathon to tell you about today's weather in as many ways as possible!"
    image="/screenshots/wuphf-weather.png"
    github="https://github.com/DevanTurtle7/WUPHF-Weather"
    link="https://devpost.com/software/wuphf-weather-nqk2u1"
    linkText="Devpost"
    :badges="['React Native', 'FastAPI', 'CockroachDB', 'Twilio', 'Python']"
  />

  <Project
    title="Twotor"
    description="2nd Place Community Winner of the Meet & Hack 2022 hackathon. A tutoring web application where students help each other."
    image="/screenshots/twotor.png"
    github="https://github.com/DevanTurtle7/twotor"
    link="https://devpost.com/software/twotor-ixyc3l"
    linkText="Devpost"
    :badges="['React', 'Flask', 'PostgreSQL', 'Python']"
    reverse
  />
</template>
