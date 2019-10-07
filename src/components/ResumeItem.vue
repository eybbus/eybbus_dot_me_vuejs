<template>
  <div class="myWork" id="myWork">
    <h2 class="sub-title">Resume</h2>
    <h3>Programmer</h3>
    <ul v-if="programmer.length > 0">
      <li v-for="(job, index) in programmer" :key="index">
        <job-item
          :name="job.name"
          :title="job.title"
          :duration="job.duration"
          :details="job.details"
        />
      </li>
    </ul>
    <h3>Technician</h3>
    <ul v-if="technician.length > 0">
      <li v-for="(job, index) in technician" :key="index">
        <job-item
          :name="job.name"
          :title="job.title"
          :duration="job.duration"
          :details="job.details"
        />
      </li>
    </ul>
    <h3>Misc - Early Life</h3>
    <ul v-if="yearlyJobs.length > 0">
      <li v-for="(job, index) in yearlyJobs" :key="index">
        <JobItem
          :name="job.name"
          :title="job.title"
          :duration="job.duration"
          :details="job.details"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import JobItem from "@/components/JobItem";
export default {
  name: "ResumeItem",
  components: { JobItem },
  data: function() {
    return {
      programmer: [
        {
          name: "Vinnueftirlitið",
          title: "Mobile developer",
          duration: "5 months",
          details:
            "My final project at the university. Group project of creating a mobile app for the company."
        }
      ],
      technician: [
        {
          name: "Tæknivörur ehf",
          title: "Technician",
          duration: "2 Summers",
          details: "Repaired Samsung Phones"
        },
        {
          name: "Friðrik A. Jónsson ehf",
          title: "Technician",
          duration: "1 Year",
          details: "Repaired electrical equipment in ships"
        }
      ],
      yearlyJobs: [
        {
          name: "Íslandspóstur hf",
          title: "Mailman",
          duration: "3 years",
          details: "Sorting and delivering mail"
        },
        {
          name: "Flugleiðahotel ehf",
          title: "Dish machine Operator",
          duration: "3 years",
          details: "Washing dishes and helping around the kitchen"
        },
        {
          name: "Goya Tapas bar",
          title: "Dish machine Operator",
          duration: "9 months",
          details: "Washing dishes and helping around the kitchen"
        },
        {
          name: "Unknown",
          title: "Museum Protection",
          duration: "2 summers",
          details: "Watched over An Art exhibit"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.myWork {
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
}

li {
  padding: 20px 5% 20px;
  list-style: none;
  border-bottom: 1px solid $light-blue;
}

li {
  transition: 0.5s;
}
li:hover {
  background-color: $light-blue;
  color: $white;
}
ul {
  margin: 0;
  padding: 0 5px;
}

h4 {
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;
}

h3 {
  font-size: 2.3rem;
  margin: 10px 0;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  color: $red;
}
</style>
