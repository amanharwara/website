<template>
  <section id="about-section">
    <div class="section-container flex">
      <div class="left">
        <h1>Hi!<br />I'm Aman Harwara</h1>
      </div>
      <div class="right">
        <p>
          I’m a programmer – specializing in frontend web development & design.
        </p>

        <p>
          I’ve been making websites for more than 3 years and have experience in
          frameworks like React, Vue and Svelte.
        </p>

        <p>
          Programming is something I’ve been doing since my childhood, always
          trying out something new.
        </p>

        <p>
          Other than programming, music is one of my main creative outlets. I
          make electronic & ambient music.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 1.5rem;
  background: #f8f8f8;
  color: #000;
}
@media screen and (min-width: 768px) {
  section {
    padding: 5rem 0;
  }
  .left {
    width: 40%;
  }
  h1 {
    font-size: 3rem;
    margin-top: 0;
    text-align: left;
  }
  .right {
    width: 40%;
    margin: auto;
  }
  p {
    font-size: 1.1rem;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
