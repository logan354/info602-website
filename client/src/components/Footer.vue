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
                    <h6 class="text-uppercase mb-4 font-weight-bold">LOGO HERE</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ipsum est distinctio perferendis
                        dolores, officiis quod recusandae beatae iure? Dolor error corrupti iusto, nulla doloremque
                        voluptate vitae ad veniam quia.</p>
                </div>

                <!-- Line break -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Information -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Company Name</h6>
                    <p>
                        <a class="text-white">Login</a>
                    </p>
                    <p>
                        <a class="text-white">Register</a>
                    </p>
                    <p>
                        <a class="text-white">About Us</a>
                    </p>
                    <p>
                        <a class="text-white">Privacy Policy</a>
                    </p>
                </div>

                <!-- Line break -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Links -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Links</h6>
                    <p>
                        <a class="text-white">Our Menu's</a>
                    </p>
                    <p>
                        <a class="text-white">Make a Booking</a>
                    </p>
                    <p>
                        <a class="text-white">Your Account</a>
                    </p>
                </div>

                <!-- Line break -->
                <hr class="w-100 clearfix d-md-none" />

                <!-- Contact -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p>
                        <a class="text-white">Contact Us</a>
                    </p>
                    <p><i class="fas fa-envelope mr-3"></i>company@gmail.com</p>
                    <p><i class="fas fa-phone mr-3"></i>+000 0000 0000</p>
                </div>
            </div>

            <!-- Line break -->
            <hr class="mb-3">

            <!-- Row 2 -->
            <div class="row p-3 pt-0 d-flex align-items-center">

                <!-- Copyright -->
                <div class="col-md-7 col-lg-8 text-center text-md-start">
                    <div class="p-3">
                        <a class="text-white">Copyright © 2024 Company Name</a>
                    </div>
                </div>

                <!-- Soical Links -->
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <!-- Facebook -->
                    <a class="btn btn-floating m-1" herf="www.facebook.com" role="button">
                        <img src="../assets/images/socials/facebook-logo.png" height="30px">
                    </a>

                    <!-- Instagram -->
                    <a class="btn btn-floating m-1" herf="www.instagram.com" role="button">
                        <img src="../assets/images/socials/instagram-logo.png" height="30px">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
footer {
    background-color: #45526e;
}
</style>
