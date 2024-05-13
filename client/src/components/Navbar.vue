<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">

      <!-- Logo -->
      <a class="nav-link">
        <RouterLink class="router-link" to="/">
          <a class="navbar-brand">
            <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30"
              height="24" class="d-inline-block align-text-top">Bootstrap</a>
        </RouterLink>
      </a>

      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">Menu</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="router-link" to="/booking">Booking</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="router-link" to="/about">About</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="router-link" to="/contact">Contact</RouterLink>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link">
              <RouterLink class="router-link" to="/contact">Account</RouterLink>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.router-link {
  text-decoration: none;
}
</style>