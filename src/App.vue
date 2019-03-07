<template>
  <div id="app">
    <header-bar></header-bar>
    <Opening></Opening>
    <navbar></navbar>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Opening from "./components/Opening";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";

export default {
  name: "App",
  data() {
    return {
      prevHeight: 0
    };
  },
  components: {
    HeaderBar,
    Navbar,
    Opening,
    FooterBar
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
