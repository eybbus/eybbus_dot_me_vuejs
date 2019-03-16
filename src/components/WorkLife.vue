<template>
  <div class="container" id="work">
    <h1 class="title">Work</h1>
    <programming-exp/>
    <resume-item/>
  </div>
</template>

<script>
import ProgrammingExp from "./ProgrammingExp";
import ResumeItem from "./ResumeItem";

export default {
  name: "WorkLife",
  components: {
    ProgrammingExp,
    ResumeItem
  }
};
</script>

