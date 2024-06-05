<script setup>
import { RouterLink } from "vue-router";
import { store } from "../store/index.js";
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light py-4">
        <div class="container">

            <!-- Logo -->
            <a class="navbar-brand">
                <RouterLink class="router-link" to="/">
                    <img src="../assets/images/logos/rasai-logo.jpg" alt="Logo" width="100" class="d-inline-block">
                </RouterLink>
                <a class="description">&nbsp;&nbsp;&nbsp;Authentic Sri Lankan Catering</a>
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
                            <RouterLink class="router-link" to="/menu"><strong>Menu</strong></RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <RouterLink class="router-link" to="/about"><strong>About</strong></RouterLink>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="contact-us nav-link">
                            <RouterLink class="router-link" to="/contact-us"><strong>Contact Us</strong></RouterLink>
                        </a>
                    </li>
                </ul>

                <div class="navbar-account">
                    <div v-if="!store.user">
                        <!-- Account login and register options-->
                        <a class="nav-link">
                            <i class="bi bi-person-circle"></i>&nbsp;<RouterLink class="router-link" to="/login">Login
                            </RouterLink>
                            <a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a>
                            <i class="bi bi-person-circle"></i>&nbsp;<RouterLink class="router-link" to="/register">
                                Register</RouterLink>
                        </a>
                    </div>
                    <div v-else>
                        <!-- Account options -->
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../assets//images/profile/profile-placeholder.jpg" alt="" width="32"
                                    height="32" class="rounded-circle me-2">
                                <strong style="color: #222121">{{ store.user.username }}</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow"
                                aria-labelledby="dropdownUser1">

                                <!-- Client Dashboard not Added -->
                                <div v-if="!isAdmin">
                                    <li><a class="dropdown-item disabled">
                                            <RouterLink class="router-link" to="/dashboard/home">Dashboard</RouterLink>
                                        </a></li>
                                </div>
                                <div v-else>
                                    <li><a class="dropdown-item">
                                            <RouterLink class="router-link" to="/dashboard/home">Dashboard</RouterLink>
                                        </a></li>
                                </div>
                                <li><a class="dropdown-item">
                                        <RouterLink class="router-link" to="/account">My Account</RouterLink>
                                    </a></li>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <!-- Make href so mouse cursor changes -->
                                <li><a href="" class="dropdown-item" @click.prevent="handleSignOut">
                                        <i class="bi bi-box-arrow-in-right"></i>&nbsp;Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar-brand .description {
    color: #ed1b34;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
}

.navbar-nav li {
    padding-left: 20px;
    padding-right: 20px;
}

.contact-us {
    border: 2px solid black;
    padding: 5px;
    background-color: #98908b;
}

.contact-us:hover {
    background-color: #F8F9FA;
}

.nav-link .router-link {
    color: #222121;
    text-decoration: none;
}

.nav-link .router-link:hover {
    color: red;
}

.navbar-account {
    padding-left: 20px;
    padding-right: 40px;
}

.dropdown-item .router-link {
    color: white;
    text-decoration: none;
}

@media screen and (max-width: 600px) {
    .navbar-brand .description {
        display: none;
    }
}
</style>

<script>
export default {
    methods: {
        isAdmin() {
            if (store.user.role !== 1) return false;
            else return true;
        },
        handleSignOut() {
            store.user = null;
        }
    }
}
</script>