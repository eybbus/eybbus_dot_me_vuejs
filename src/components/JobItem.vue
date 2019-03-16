<template>
  <div class="job-item">
    <div class="job-item-container" @click="toggle()">
      <h3 class="name">{{this.name}}</h3>
      <span class="job-title">{{this.title}}</span>
      <span class="duration">{{this.duration}}</span>
      <font-awesome-icon icon="angle-up" v-show="!isOpen" class="icon"/>
      <font-awesome-icon icon="angle-down" v-show="isOpen" class="icon"/>
      <span v-show="isOpen">{{this.details}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "job-item",
  data: function() {
    return {
      isOpen: false
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.job-item-container {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  max-width: 1400px;
}

.name {
  font-size: 2.2rem;
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 50%;
  margin: 0px;
}
.job-title {
  @include min($tablet) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 25%;
  }
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 100%;
}
.duration {
  @include min($tablet) {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 25%;
  }
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: 100%;
}

.icon {
  flex-basis: 100%;
  margin: 0px;
}
.icon {
  flex-basis: 100%;
  margin: 0px;
}

h3 {
  font-weight: 400;
}
</style>
