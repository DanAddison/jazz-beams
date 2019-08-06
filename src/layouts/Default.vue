<template>
  <div class="layout">
    <Nav/>
    <slot/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav
  }
};
</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
@media (min-width: $bp-sidebar) {
  body {
    padding-left: $sidebar-base-width;
  }
}

</style>
