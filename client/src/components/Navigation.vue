<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">

            <!-- Logo -->
            <a class="navbar-brand">
                <RouterLink class="router-link" to="/">
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30"
                        height="24" class="d-inline-block align-text-top">
                    Bootstrap
                </RouterLink>
            </a>

            <!-- Toggler -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
                        <!-- Account login and register options-->
                        <a class="nav-link">
                            <RouterLink class="router-link" to="/login">Login</RouterLink>
                            <a>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</a>
                            <RouterLink class="router-link" to="/register">Register</RouterLink>
                        </a>
                    </div>
                    <div v-else>
                        <!-- Account options -->
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                                    class="rounded-circle me-2">
                                <strong style="color: black;">mdo</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow"
                                aria-labelledby="dropdownUser1">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-brand {
    padding-left: 20px;
    padding-right: 0px;
}

.navbar-nav li {
    padding-left: 20px;
    padding-right: 40px;
}

.navbar-account {
    padding-left: 50px;
    padding-right: 50px;
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