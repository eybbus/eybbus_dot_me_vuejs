<template>
  <nav class="nav">
    <div class="container container--vertically-center">
      <div class="logo">
        <a href="https://www.eybbus.me">
          <img src="@/assets/logo.png" alt>
        </a>
      </div>
      <ul class="header-list">
        <li>
          <a href="#myWork">Work</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  padding: 2em 0 0.5em;
  align-items: center;
  z-index: 10;
}

.logo {
  flex: 1 1 0;
  align-self: flex-start;
  a {
    display: inline-block;
    img {
      height: 85px;
      min-width: 100%;
    }
  }
}

.header-list {
  @include min($tablet) {
    margin: -20px 0 0;
  }
  flex: 1 1 0;
  margin: 0;
  padding: 0;
  text-align: right;
  li {
    display: inline-block;
    padding: 0 30px;
    letter-spacing: 0.5px;
    font-size: 1.8rem;
  }
}
</style>
