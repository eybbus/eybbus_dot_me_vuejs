<template>
  <div id="app">
    <header-bar></header-bar>
    <Opening></Opening>
    <my-work></my-work>
    <about-me></about-me>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Opening from "./components/Opening";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import MyWork from "./components/MyWork";
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
    MyWork,
    AboutMe
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style lang="scss">
html {
  background-color: $white;
  scroll-behavior: smooth;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
