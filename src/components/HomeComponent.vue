<template>
  <div class="container-fluid">
    <main role="main" class="col-lg-12 ml-sm-auto col-lg-10 px-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
        <h1 class="h2">Welcome to Level Up!</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <router-link to="/add-goal">
              <button type="button" class="btn btn-sm btn-outline-success">Add Goal</button>
            </router-link>
            <router-link to="/goals">
              <button type="button" class="btn btn-sm btn-outline-secondary">View Goals</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="space"></div>
      <div class="container-fluid row">
        <div class="col-md-12 border">
          <AddEventComponent />
        </div>
      </div>
      <div class="space"></div>
      <div class="container-fluid row">
        <div class="col-md-12 border">
          <GoalsDashboardComponent />
        </div>
      </div>
      <div class="space"></div>
      <div class="container-fluid row">
        <div class="col-md-12 border">
          <GoalsDashboardComponent />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import GoalsDashboardComponent from "./GoalsDashboardComponent";
import AddEventComponent from "./AddEventComponent";

export default {
  data() {
    return {};
  },
  components: {
    GoalsDashboardComponent,
    AddEventComponent
  }
};
</script>

<style>
.border {
  border: 1px solid #000000;
}

.space {
  padding-bottom: 10px;
}

.horizontal-space {
  padding-right: 10px;
}
</style>