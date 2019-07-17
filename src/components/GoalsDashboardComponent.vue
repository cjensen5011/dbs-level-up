<template>
  <div>
    <h3>Current Goals</h3>
    <table class="table table-header">
      <thead>
        <!-- <tr>
          <th>Title</th>
          <th>Body</th>
        </!-->
      </thead>
      <tbody>
        <tr v-for="goal in goals" :key="goal._id">
          <td>{{ goal.title }}</td>
          <td>{{ goal.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: []
    };
  },
  created() {
    let uri = "http://localhost:4000/goals";
    this.axios.get(uri).then(response => {
      this.goals = response.data;
    });
  }
};
</script>