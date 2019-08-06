<template>
  <section class="resume-section" id="welcome">
    <h1>
      Jazz
      <span class="text-primary">Beams</span>
    </h1>
    <p class="subheading">Vinyl-only DJs</p>

    <p class="lead">Hi! We're Si and Steve.</p>
    <div class="resume-section__image">
      <g-image
        alt="the boys buried under all their vinyl records"
        src="../assets/images/the-boys.jpg"
        width="600"
      />
    </div>
    <div class="social-icons">
      <a href="https://facebook.com/jazzbeams" target="_blank">
        <font-awesome :icon="['fab', 'facebook']" />
      </a>
      <a href="https://www.instagram.com/explore/tags/jazzbeams/" target="_blank">
        <font-awesome :icon="['fab', 'instagram']" />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#welcome {
  max-width: 40rem;
}
h1 {
  display: none;
  @media (min-width: $bp-tablet) {
    display: block;
    margin-bottom: 0;
    max-width: 300px;
  }
  @media (min-width: $bp-sidebar) {
    max-width: 100%;
  }
}
section.resume-section {
  .subheading {
    font-size: 2rem;

    @media (min-width: $bp-tablet) {
      margin-bottom: 4rem;
    }
  }
}
.resume-section__image {
  margin-top: 4em;

  img {
    max-width: 100%;
  }
}
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
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
  color: $link;
}
</style>