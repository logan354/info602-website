<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <footer class="p-3 pt-5 pb-0 text-center text-lg-start">
        <div class="container text-white">

            <!-- Row 1 -->
            <div class="row">

                <!-- Logo -->
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <RouterLink><img src="../assets/images/logos/rasai-logo.jpg" alt="Rasai"></RouterLink>
                    <p><br /></p>
                </div>

                <!-- Line break -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Information -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Rasai</h6>
                    <p>
                        <RouterLink class="router-link" to="/login"><a class="text-white">Login</a></RouterLink>
                    </p>
                    <p>
                        <RouterLink class="router-link" to="/register"><a class="text-white">Register</a></RouterLink>
                    </p>
                    <p>
                        <RouterLink class="router-link" to="/about"><a class="text-white">About Us</a></RouterLink>
                    </p>
                    <p>
                        <a class="text-white">Privacy Policy</a>
                    </p>
                </div>

                <!-- Line break -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Links -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold text">Links</h6>
                    <p>
                        <RouterLink class="router-link" to="/menu"><a class="text-white">Our Menu</a></RouterLink>
                    </p>
                    <p>
                        <RouterLink class="router-link" to="/contact-us"><a class="text-white">Contact Us</a>
                        </RouterLink>
                    </p>
                    <p>
                        <RouterLink class="router-link" to="/account"><a class="text-white">My Account</a></RouterLink>
                    </p>
                </div>

                <!-- Line break -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Contact -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i class="bi bi-house-door-fill"></i> Culinary City, FL 56789</p>
                    <p><i class="bi bi-envelope-fill"></i> contact@rasaicatering.com</p>
                    <p><i class="i bi-telephone-fill"></i> (123) 456-7890</p>
                </div>
            </div>

            <!-- Line break -->
            <hr class="mb-3">

            <!-- Row 2 -->
            <div class="row p-3 pt-0 d-flex align-items-center">

                <!-- Copyright -->
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                    <div class="p-3">
                        <a class="text-white text-decoration-none">Copyright © 2024 Rasai Catering</a>
                    </div>
                </div>

                <!-- Soical Links -->
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <!-- Facebook -->
                    <a class="btn btn-floating m-1" herf="www.facebook.com" role="button">
                        <img src="../assets/images/socials/facebook-dark.png" height="40px">
                    </a>

                    <!-- Instagram -->
                    <a class="btn btn-floating m-1" herf="www.instagram.com" role="button">
                        <img src="../assets/images/socials/instagram-dark.png" height="40px">
                    </a>

                    <!-- Twitter/X -->
                    <a class="btn btn-floating m-1" herf="www.twitter.com" role="button">
                        <img src="../assets/images/socials/twitter-dark.png" height="40px">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #9b765b;
}

h6 {
    color: #222121;
}
</style>
