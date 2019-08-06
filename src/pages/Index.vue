<template>
  <Layout>
    <div class="container">
      <About/>
      <hr>
      <Portfolio/>
      <hr>
      <Experience/>
      <hr>
      <Skills/>
      <hr>
      <!-- <Education/>
      <hr> -->
      <Interests/>
      <hr>
      <Contact/>
    </div>
  </Layout>
</template>

<script>
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
// import Education from "../components/Education";
import Interests from "../components/Interests";
import Contact from "../components/Contact";
export default {
  components: {
    About,
    Portfolio,
    Experience,
    Skills,
    // Education,
    Interests,
    Contact
  },
  metaInfo: {
    title: "Resume",
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
    font-size: 1.2rem;
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
</style>