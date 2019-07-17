<template>
  <div>
    <h1>Edit Goal</h1>
    <form @submit.prevent="updateGoal">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Goal Title:</label>
            <input type="text" class="form-control" v-model="goal.title">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Goal Body:</label>
            <textarea class="form-control" v-model="goal.body" rows="5"></textarea>
          </div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goal: {}
    };
  },
  created() {
    let uri = `http://localhost:4000/goals/edit-goal/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.goal = response.data;
    });
  },
  methods: {
    updateGoal() {
      let uri = `http://localhost:4000/goals/update/${this.$route.params.id}`;
      this.axios.post(uri, this.goal).then(() => {
        this.$router.push({ name: "goals" });
      });
    }
  }
};
</script>