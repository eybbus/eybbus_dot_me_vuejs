<template>
  <footer class="footer">
    <div class="footer-container" id="footer">
      <h1>Want To Contact Me?</h1>
    </div>
    <div class="footer-container">
      <ul class="contact-list">
        <li>
          <a href="https://github.com/eybbus">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eyþór-freyr-óskarsson-b80b0b15b/">Linkedin</a>
        </li>
        <li>
          <a href="https://www.instagram.com/eybbus">Instagram</a>
        </li>
        <li>
          <a href="mailto:eythorfreyr94@gmail.com">Email</a>
        </li>
      </ul>
    </div>
    <div class="footer-container">
      <h3>Made with VueJs</h3>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-bar"
};
</script>

<style lang="scss" scoped>
.footer {
  @media screen and (min-width: 768px) {
    padding: 6em 0;
  }
  padding: 4em 0 6em;
}

.footer-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
}

.contact-list {
  margin: 0;
  padding: 0;
  font-size: 1.6em;
  li {
    display: inline-block;
    @include min($tablet) {
      margin: 0 25px 0 0;
    }
    margin: 0 25px;
  }
}
</style>
