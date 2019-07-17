<template>
  <div>
    <h1>Goals</h1>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'add' }" class="btn btn-primary">Add Goal</router-link>
      </div>
    </div>
    <br>
    <table class="table table-header">
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="goal in goals" :key="goal._id">
          <td>{{ goal.title }}</td>
          <td>{{ goal.body }}</td>
          <td>
            <router-link
              :to="{name: 'edit-goal', params: { id: goal._id }}"
              class="btn btn-primary"
            >Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click.prevent="deleteGoal(goal._id)">Delete</button>
          </td>
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
  },
  methods: {
    deleteGoal(id) {
      let uri = `http://localhost:4000/goals/delete/${id}`;
      this.axios.delete(uri).then(() => {
        this.goals.splice(this.goals.indexOf(id), 1);
      });
    }
  }
};
</script>