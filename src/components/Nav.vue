<template>
  <nav class="navbar" id="sideNav">
    <div v-on:click.prevent="$scrollTo('#welcome')" class="navbar-brand">
      <span class="name">Jazz Beams</span>
      <span class="avatar">
        <g-image
          alt="planet with psychedelic rings"
          src="../assets/images/jazz-fav.png"
          class="img-profile"
          width="300"
        />
      </span>
    </div>

    <div id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#welcome')">Welcome</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#about')">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#sounds')">Sounds</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#contact')">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-brand,
.nav-item {
  cursor: pointer;
}
.navbar-brand {
  padding: 1rem;
  .name {
    color: $white-overlay1;
    text-transform: uppercase;
    @include heading-font;
    font-size: 1.75rem;
  }
}
#sideNav {
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: $primary;
  .nav-link {
    text-transform: uppercase;
  }
  #navbarSupportedContent,
  .avatar {
    display: none;
  }
}
@media (min-width: $bp-sidebar) {
  #sideNav {
    @include heading-font;
    font-size: 1.75rem;
    text-align: center;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;

    .navbar-brand {
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
      .name {
        display: none;
      }
      .avatar {
        display: block;
        .img-profile {
          max-width: 10rem;
          max-height: 10rem;
          border-radius: 50%;
          border: 0.5rem solid $white-overlay3;
          transition: 0.3s;

          &:hover {
            border: 0.5rem solid $bg;
          }
        }
      }
    }

    #navbarSupportedContent {
      display: flex;
      width: 100%;
      margin-bottom: auto;
      .navbar-nav {
        flex-direction: column;
        width: 100%;
        padding-left: 0;
      }
      .nav-item,
      .nav-link {
        display: block;
        padding: 0.25rem 0;
        color: $white-overlay2;
        transition: 0.2s;

        &:hover,
        &:focus {
          color: white;
        }
      }
    }
  }
}
</style>