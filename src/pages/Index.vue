<template>
  <Layout>
    <div class="container">
      <Welcome />
      <hr />
      <About />
      <hr />
      <Sounds />
      <hr />
      <Contact />
    </div>
  </Layout>
</template>

<script>
import Welcome from "../components/Welcome";
import About from "../components/About";
import Sounds from "../components/Sounds";
import Contact from "../components/Contact";
export default {
  components: {
    Welcome,
    About,
    Sounds,
    Contact
  },
  metaInfo: {
    title: "Jazz Beams DJs"
  }
};
</script>

<style lang="scss">
.container {
  padding: 0 1rem;

  @media (min-width: 50rem) {
    padding: 0 2rem;
  }

  @media (min-width: 75rem) {
    padding: 0 4rem;
  }
}
section.resume-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  max-width: 50rem;

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    @include heading-font;
    font-size: 1.5rem;
    margin: 0;
  }
  .resume-date {
    margin-top: 0;
    font-size: 1rem;
    color: $copy-lightest;
  }
  .lead {
    font-size: 1.25rem;
  }
  p {
    color: $copy-light;
  }
}

@media (min-width: $bp-sidebar) {
  section.resume-section {
    min-height: 100vh;
  }
}
@media (min-width: 75rem) {
  section.resume-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
    max-width: 60rem;
  }
}

hr {
  border: 0;
  height: 1px;
  background: $black;
}
</style>