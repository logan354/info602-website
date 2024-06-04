<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 250px; height: 750px">
    <ul class="nav nav-pills flex-column mb-auto" @click="handleClick">
      <hr>
      <li>
        <a id="navigation-dashboard" class="nav-link text-white">
          <i class="bi bi-house-door-fill"></i>&nbsp;&nbsp;&nbsp;<RouterLink id="dashboard" class="router-link"
            to="/dashboard/home">Dashboard</RouterLink>
        </a>
      </li>
      <li>
        <a id="navigation-bookings" class="nav-link text-white">
          <i class="bi bi-file-text-fill"></i>&nbsp;&nbsp;&nbsp;<RouterLink id="bookings" class="router-link"
            to="/dashboard/bookings">Bookings</RouterLink>
        </a>
      </li>
      <li>
        <a id="navigation-analytics" class="nav-link text-white">
          <i class="bi bi-bar-chart-fill"></i>&nbsp;&nbsp;&nbsp;<RouterLink id="analytics" class="router-link"
            to="/dashboard/analytics">Analytics</RouterLink>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav li {
  padding-bottom: 10px;
}

.router-link {
  text-decoration: none;
  color: white;
}
</style>

<script>
export default {
  methods: {
    handleClick(event) {
      // This is terrible implementation but . . .

      if (event.target.id === "dashboard") {
        document.getElementById("navigation-dashboard").classList.add("active");
        document.getElementById("navigation-bookings").classList.remove("active");
        document.getElementById("navigation-analytics").classList.remove("active");
      }
      else if (event.target.id === "bookings") {
        document.getElementById("navigation-dashboard").classList.remove("active");
        document.getElementById("navigation-bookings").classList.add("active");
        document.getElementById("navigation-analytics").classList.remove("active");
      }
      else if (event.target.id === "analytics") {
        document.getElementById("navigation-dashboard").classList.remove("active");
        document.getElementById("navigation-bookings").classList.remove("active");
        document.getElementById("navigation-analytics").classList.add("active");
      }
    }
  }
};
</script>