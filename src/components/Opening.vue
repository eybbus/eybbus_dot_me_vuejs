<template>
  <div class="container">
    <div class="text-container">
      <div class="header-text">
        <h1>Hæ, I'm Eyþór Freyr Óskarsson, a Progammer and an Electrical Technician living in Reykavik</h1>
      </div>
      <div class="sub-text">
        <h2>Currently doing:</h2>
        <div class="status-container">
          <div class="status-logo">
            <a href="https://www.eybbus.me">
              <img src="@/assets/job_search.png" alt="Job Search icon" />
            </a>
          </div>
          <div
            class="status-text"
          >Searching for a job. My contact information can be found at the bottom of the page.</div>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img src="../assets/bus-station.jpg" alt="missing picture of me" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Opening"
};
</script>

<style lang="scss" scoped>
.text-container {
  @include min($tablet) {
    width: 60%;
    margin-left: 10%;
  }
  color: $red;
  margin: auto;
  width: 90%;
}

.text-container h1 {
  @include min($tablet) {
    line-height: 2em;
    font-size: 2.5em;
  }
  font-size: 1.7em;
  line-height: 1.7em;
}

.sub-text {
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  color: $red;
  h2 {
    font-size: 2.2rem;
  }
}

.status-container {
  @media screen and (max-width: $tablet) {
    width: 100%;
    .status-logo {
      display: none;
    }
  }
  display: flex;
  width: 40%;
  align-items: center;
  .status-logo {
    min-width: 120px;
    margin: 10px;
    a {
      display: inline-block;
      img {
        height: 120px;
        min-width: 100%;
      }
    }
  }
}
.image-container {
  @include min($tablet) {
    display: block;
  }
  display: none;
  width: 25%;
  margin: 20px 0;
  img {
    width: 80%;
    height: auto;
    border: 2px solid $dark-blue;
    border-radius: 6em / 5em;
  }
}
</style>

