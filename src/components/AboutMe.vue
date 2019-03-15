<template>
  <div class="about" id="about">
    <h1>About Me</h1>
    <p>
      I originate from the valley of Skíðadalur. I went to junior college VMA to learn to
      be an Electrical Technician. Finished my Icelandic matriculation examination there and moved to
      Reykjavík to finish my Apprenticeship and graduated as a journeyman Electrical Technician.
      Currently, I'm finishing Computer science at the University of Reykjavík
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1440px;
  flex-direction: column;
  margin: 40px auto;
}

h1 {
  font-weight: 600;
  font-size: 3rem;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid $light-blue;
  color: $dark-blue;
}
</style>

