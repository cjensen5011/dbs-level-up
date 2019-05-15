<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark " v-bind:class="{ 'navbarOpen': show }">
      <router-link class="navbar-brand" to="/">Level Up</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        v-on:click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click.native="toggleNavbar">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create" @click.native="toggleNavbar">Create Post</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/posts" @click.native="toggleNavbar">Posts</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <br>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.small-icon {
  width: 2rem;
  height: auto;
  padding-right: 5px;
}
</style>
