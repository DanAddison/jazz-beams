<template>
  <section class="resume-section" id="portfolio">
      <h2>Portfolio</h2>
      
      <div class="resume-item">

        <div class="portfolio-item">
          <g-image
            alt="jm-woodcraft.com screenshot"
            src="../assets/images/portfolio/JM-Woodcraft.jpg"
            height="312"
            width="500"
            fit="cover"
          />

          <div class="portfolio-item__overlay">
            <h1>jm-woodcraft.com</h1>
            <p class="subtitle">Bespoke WordPress site for a carpenter.</p>
            <p class="tech-stack"><span>Tech stack: </span>WordPress, Sass, jQuery, Gulp</p>
            <div class="links">
              <p><a href="https://jm-woodcraft.com" target="_blank">Visit site<font-awesome :icon="['fas', 'external-link-alt']"/></a></p>
              <p><a href="https://github.com/DanAddison/JM-Woodcraft" target="_blank">View code<font-awesome :icon="['fab', 'github']"/></a></p>
            </div>
          </div>
        </div>

        <div class="portfolio-item">
            <g-image
              alt="johnhosking.com screenshot"
              src="../assets/images/portfolio/John-Hosking.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />

            <div class="portfolio-item__overlay">
              <h1>johnhosking.com</h1>
              <p class="subtitle">A portfolio website for an artist.</p>
              <p class="tech-stack"><span>Tech stack: </span>Sass, Nunjucks, jQuery, Gulp</p>
              <div class="links">
                <p><a href="https://johnhosking.com" target="_blank">Visit site<font-awesome :icon="['fas', 'external-link-alt']"/></a></p>
                <p><a href="https://github.com/DanAddison/John-Hosking" target="_blank">View code<font-awesome :icon="['fab', 'github']"/></a></p>
              </div>
            </div>
        </div>

        <div class="portfolio-item">
            <g-image
              alt="dan4ruby.com screenshot"
              src="../assets/images/portfolio/Dan4Ruby.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />
            <div class="portfolio-item__overlay">
              <h1>dan4ruby.com</h1>
              <p class="subtitle">Wedding event information website.</p>
              <p class="tech-stack"><span>Tech stack: </span>Sass, Nunjucks, jQuery, Gulp</p>
              <div class="links">
                <p><a href="https://dan4ruby.com" target="_blank">Visit site<font-awesome :icon="['fas', 'external-link-alt']"/></a></p>
                <p><a href="https://github.com/DanAddison/dan4ruby" target="_blank">View code<font-awesome :icon="['fab', 'github']"/></a></p>
              </div>
            </div>
        </div>

        <div class="portfolio-item">
          <g-image
            alt="ellisbolton.com screenshot"
            src="../assets/images/portfolio/Ellis-Bolton.jpg"
              class="img-profile"
              height="312"
              width="500"
            fit="cover"
          />
          <div class="portfolio-item__overlay">
              <h1>ellisbolton.com</h1>
              <p class="subtitle">A portfolio website for an illustrator.</p>
              <p class="tech-stack"><span>Tech stack: </span>WordPress, Sass, jQuery, Gulp</p>
              <div class="links">
                <p><a href="https://ellisbolton.com" target="_blank">Visit site<font-awesome :icon="['fas', 'external-link-alt']"/></a></p>
                <p><a href="https://github.com/DanAddison/ellis-bolton-wordpress" target="_blank">View code<font-awesome :icon="['fab', 'github']"/></a></p>
              </div>
            </div>
        </div>

        <div class="portfolio-item">
          <g-image
            alt="Pen &amp; Plant website screenshot"
            src="../assets/images/portfolio/Pen-and-Plant.jpg"
              class="img-profile"
              height="312"
              width="500"
            fit="cover"
          />
          <div class="portfolio-item__overlay">
              <h1>pen-and-plant.com</h1>
              <p class="subtitle">An online portfolio and shop for an illustrator.</p>
              <p class="tech-stack"><span>Tech stack: </span>WordPress, WooCommerce, Sass, jQuery, Gulp</p>
              <div class="links">
                <p><a href="https://github.com/DanAddison/Pen-and-Plant" target="_blank">View code<font-awesome :icon="['fab', 'github']"/></a></p>
              </div>
            </div>
        </div>

        <div class="portfolio-item">
            <g-image
              alt="daniel-addison-lyrics-archive screenshot"
              src="../assets/images/portfolio/Lyrics-Archive.jpg"
              class="img-profile"
              height="312"
              width="500"
              fit="cover"
            />
            <div class="portfolio-item__overlay">
              <h1>lyrics-archive.com</h1>
              <p class="subtitle">A documentation website for a songwriter.</p>
              <p class="tech-stack"><span>Tech stack: </span>Markdown, Javascript, Docsify</p>
              <div class="links">
                <p><a href="https://daniel-addison-lyrics-archive.netlify.com/#/" target="_blank">Visit site<font-awesome :icon="['fas', 'external-link-alt']"/></a></p>
                <p><a href="https://github.com/DanAddison/Songwriting" target="_blank">View code<font-awesome :icon="['fab', 'github']"/></a></p>
              </div>
            </div>
        </div>

      </div>
      
  </section>
</template>

<script>

</script>


<style lang="scss" scoped>
section.resume-section {
  max-width: 1400px;
}
.resume-item {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-item {
  position: relative;
  max-width: 100%;
  flex: 1 0 400px;
  min-width: 300px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 11px -6px rgba(0,0,0,0.75);
  transition: .2s;


  @media (min-width: 600px) {
    max-width: 47%;

    &:nth-of-type(odd) {
      margin-right: 2rem;
    }
  }

  @media (min-width: 1400px) {
    margin-right: 2rem;
  }

  &:hover,
  &:focus {
    transform: scale(1.07);
    box-shadow: 0px 0px 11px -2px rgba(0,0,0,0.5);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.portfolio-item__overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  background-color: $primary-overlay;
  transition: .3s;
  opacity: 0;

  &:hover,
  &:focus {
    opacity: 1;
  }

  p {
    color: $copy;
    margin: 0;
    line-height: 1;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 0;
  }

  .subtitle {
    font-weight: bold;
    margin: .5em 0 .7em;
  }

  .tech-stack {
    color: $copy-light;
    font-size: .9rem;
  }
    
  .links {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    display: flex;
    // margin-top: 1rem;

    p {
      flex-grow: 1;
      margin-bottom: .5em;
      margin-top: 0;
      color: $primary;
      
      svg {
        padding-left: .3em;
      }

      a {
        color: $primary;

        &:hover,
        &:focus {
          color: $secondary;
        }
      }
    }
  }
}

</style>