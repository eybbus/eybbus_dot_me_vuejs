<template>
  <div id="app">
    <header-bar/>
    <Opening class="section"/>
    <work-life class="section"/>
    <about-me class="section"/>
    <footer-bar/>
  </div>
</template>

<script>
import Opening from "./components/Opening";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import WorkLife from "./components/WorkLife";
import AboutMe from "./components/AboutMe";

export default {
  name: "App",
  data() {
    return {
      prevHeight: 0
    };
  },
  components: {
    HeaderBar,
    Opening,
    FooterBar,
    WorkLife,
    AboutMe
  }
};
</script>

<style lang="scss">
html {
  background-color: $white;
  scroll-behavior: smooth;
}

.section {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
