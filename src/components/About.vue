<template>
  <section class="resume-section" id="about">
      <h1>
        Dan
        <span class="text-primary">Addison</span>
      </h1>
      <p class="subheading">Web Developer</p>
      <p class="lead">I'm a web developer from Folkestone with a background in art and music.
      I have been delivering bespoke websites for clients since 2017, both solo and with design agency <a href="https://nebulodesign.com" class="link-text">Nebulo</a>.</p>
      <p class="lead">This work satisfies some of my key drives: for being analytical and pragmatic, for creating compelling things, and for sharing with others.
      I love learning, I love the small technical details, and I love steering a project from conception through to completion. </p>

      <div class="social-icons">
        <a href="https://github.com/DanAddison" target="_blank">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://www.linkedin.com/in/danaddison/" target="_blank">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://youtube.com/c/DanAddison" target="_blank">
          <font-awesome :icon="['fab', 'youtube']"/>
        </a>
        <a href="https://instagram.com/dandevelops" target="_blank">
          <font-awesome :icon="['fab', 'instagram']"/>
        </a>

      </div>
  </section>
</template>

<style lang="scss" scoped>
#about {
  max-width: 40rem;
}
h1 {
  margin-bottom: 0;
}
section.resume-section {

  .subheading {
    margin-bottom: 4rem;
  }
}

.social-icons {
  margin-top: 4rem;
  a {
    cursor: pointer;
    display: inline-block;
    color: $primary;
    font-size: 1.75rem;
    margin-right: 1rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  color: $secondary;
}
</style>