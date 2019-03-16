<template>
  <div class="container main">
    <h2 class="sub-title">Programming Skills</h2>
    <div class="list-container">
      <div class="list-item">
        <h3>Languages</h3>
        <ul class="outside">
          <li>Intermediate
            <ul class="outside">
              <li>C/C++</li>
              <li>Javascript</li>
              <li>C#</li>
              <li>SQL</li>
            </ul>
          </li>
          <li>Basics
            <ul class="outside">
              <li>Python</li>
              <li>Java</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="list-item">
        <h3>Web development</h3>
        <ul>
          <li>HTML, CSS, SCSS</li>
          <li>React</li>
          <li>Redux</li>
          <li>.NET Core</li>
          <li>VueJs</li>
          <li>Node.js</li>
          <li>GraphQL</li>
          <li>REST API</li>
        </ul>
      </div>
      <div class="list-item">
        <h3>continuous integration</h3>
        <ul>
          <li>Jenkins</li>
          <li>Travis</li>
        </ul>
      </div>
      <div class="list-item">
        <h3>App development</h3>
        <ul>
          <li>React native</li>
          <li>Xamarin</li>
        </ul>
      </div>
      <div class="list-item">
        <h3>Database</h3>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>SQLite</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div class="list-item">
        <h3>Basics DevOps</h3>
        <ul>
          <li>Docker</li>
          <li>Jenkins</li>
          <li>AWS</li>
          <li>Linux</li>
        </ul>
      </div>
    </div>
    <p id="discussion">
      I'm fondest of full-stack Web development and mobile development. Have experience of making REST api
      in nodejs and dotnet core. Made a full app in react native and currently making an app in xamarin
      as a final project.
    </p>
  </div>
</template>

<script>
// import ExperienceCard from "./ExperienceCard";
export default {
  name: "ProgrammingExp",
  components: {}
};
</script>

<style lang="scss" scoped>
.main {
  flex-direction: column;
}

.list-container {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  list-style-position: inside;
  justify-content: space-evenly;
}

.list-item {
  margin: 10px;
}

#discussion {
  text-align: center;
}

.outside {
  list-style-position: outside;
}
li {
  display: list-item;
}

ul {
  display: block;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

h3 {
  font-weight: 500;
  color: $red;
}
</style>
