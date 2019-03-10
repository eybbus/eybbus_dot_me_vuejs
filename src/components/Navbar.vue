<template>
  <div class="container">
    <div class="buttons">
      <router-link class="route" to="/Profession">Profession</router-link>
      <router-link class="route" to="/AboutMe">About Me</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
.buttons {
  margin-left: auto;
  margin-right: auto;
  background-color: $dark-blue;
  display: flex;
  justify-content: center;
}

.route {
  display: inline-block;
  margin: 10px;
  &:hover {
    color: $white;
  }
}
.pure-menu a {
  color: $red;
}
</style>



