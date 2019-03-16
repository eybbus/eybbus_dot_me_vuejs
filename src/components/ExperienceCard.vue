<template>
  <div class="exp-card">
    <img :src="getImgUrl(imageSource)" alt="Logo Missing">
    <div :class="['level-bar', level]">
      <p>{{level}}</p>
    </div>
    <div class></div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: ["imageSource", "level"],
  methods: {
    getImgUrl(imageSource) {
      return require("../assets/" + imageSource);
    }
  }
};
</script>


<style lang="scss" scoped>
.exp-card {
  border-radius: 2px;
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  width: 150px;
  height: 100%;
  min-width: 100px;
  min-height: 150px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.level-bar {
  border: none;
  background-color: black;
  text-align: center;
  text-decoration: none;
  border-radius: 16px;
  p {
    font-size: 0.8em;
    color: whitesmoke;
  }
}

.basic {
  background-color: $basic;
}

.intermediate {
  background-color: $intermediate;
}

.advanced {
  background-color: $advanced;
}
</style>
