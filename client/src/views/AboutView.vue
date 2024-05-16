<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="about-content">
            <h2>Our Story</h2>
            <p>Rasai Catering has been serving delicious meals and providing exceptional service since 2008. We started
                as a small family-owned business, and over the years, we have grown to become one of the most trusted
                names in the catering industry.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to make every event memorable by delivering mouthwatering dishes and outstanding service.
                We strive to exceed our customers' expectations and create unforgettable dining experiences.</p>
            <h2>Our Team</h2>
            <p>At Rasai Catering, we have a team of talented chefs, experienced event planners, and dedicated staff who
                are passionate about food and hospitality. Together, we work tirelessly to ensure that every event is a
                success.</p>
        </div>
    </div>
    <Footer />
</template>

<style>
.container {
    width: 90%;
    /* Adjust the width as needed */
    margin: 20px auto 20px;
    /* Added margin for spacing */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

.about-content {
    max-width: 800px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: justify;
}
</style>

<script>
</script>