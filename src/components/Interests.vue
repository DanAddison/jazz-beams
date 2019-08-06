<template>
  <section class="resume-section" id="interests">
      <h2>Interests</h2>
      <p class="lead">I love low-angle sunshine, family and friends, indie cinema, languid bike rides, calisthenics, literary fiction, summer sea swimming, Shane Carruth, Alex Honnold, Rose Namajunas, Kendrick Lamar and Alan Partridge.</p>
      <div class="resume-section__video">
        <p>I also make music, and sometimes videos, and occasionally I make artistic contributions to <a href="http://www.strangecargo.org.uk/" target="_blank" class="link-text">Strange Cargo Arts</a>. So... here's a video I made of a Strange Cargo event that features my music!</p>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TERMLA3eiRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
#interests {
  max-width: 40rem;
}
.resume-section__video {
  max-width: 500px;
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

</style>