<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">

            <!-- Logo -->
            <div class="navbar-brand">
                <a class="nav-link">
                    <RouterLink class="router-link" to="/">
                        <a class="navbar-brand">
                            <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo"
                                width="30" height="24" class="d-inline-block align-text-top">Bootstrap</a>
                    </RouterLink>
                </a>
            </div>

            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <!-- First Links -->
                    <li class="nav-item">
                        <a class="nav-link">
                            <RouterLink class="router-link" to="/menu">Menu</RouterLink>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <RouterLink class="router-link" to="/about">About</RouterLink>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <button type="button" class="btn btn-success">
                                <RouterLink class="router-link" to="/contact-us">Contact Us</RouterLink>
                            </button>
                        </a>
                    </li>
                </ul>

                <div class="navbar-account">
                    <div v-if="!account">
                        <!-- Account Login and Register options-->
                        <a class="nav-link">
                            <RouterLink class="router-link" to="/login">Login</RouterLink>
                            <a>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</a>
                            <RouterLink class="router-link" to="/register">Register</RouterLink>
                        </a>
                    </div>
                    <div v-else>
                        <!-- Account options -->
                        <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong style="color: black;">mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.navbar-brand {
    padding-left: 10px;
    padding-right: 0px;
}

.navbar-nav li {
    padding-left: 20px;
    padding-right: 20px;
}

.navbar-account {
    padding-left: 20px;
    padding-right: 80px;
}

.router-link {
    color: black;
    text-decoration: none;
}
</style>

<script>
export default {
    data() {
        return {
            account: 1
        }
    }
}
</script>