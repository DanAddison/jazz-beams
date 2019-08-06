<template>
  <section class="resume-section" id="skills">
      <h2>Skills</h2>
      <div class="subheading">Programming Languages &amp; Tools</div>
      <ul class="dev-icons">
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'html5']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'css3-alt']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'js']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'vuejs']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'sass']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'wordpress']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'gulp']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'npm']"/>
        </li>
        <li class="list-inline-item">
          <font-awesome :icon="['fab', 'git']"/>
        </li>
      </ul>

      <div class="subheading">Workflow</div>
      <ul class="dev-workflow">
        <li>
          <span><font-awesome :icon="['fas', 'check']"/></span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span><font-awesome :icon="['fas', 'check']"/></span>
          Accessibility and UX principles
        </li>
        <li>
          <span><font-awesome :icon="['fas', 'check']"/></span>
          Content Management solutions
        </li>
        <li>
          <span><font-awesome :icon="['fas', 'check']"/></span>
          Clean, semantic, maintainable code
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.dev-icons {
  list-style: none;
  padding-left: 0;
  margin-bottom: 4rem;
  
  li {
    display: inline-block;
    font-size: 4rem;
    color: $copy-light;
    padding-right: 2rem;
    color: $primary;
    // cursor: pointer;

    // &:hover {
    //   color: $primary;
    // }
  }
}

.dev-workflow {
  list-style: none;
  padding-left: 0;
  font-size: 1.2rem;

  li {
    padding-bottom: 1rem;
  }

  span {
    padding-right: 1em;
    color: $primary;
  }
}

</style>