<script setup>
import Navbar from "../components/Navigation.vue";
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

<style scoped>
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    position: relative;
}

header {
    background-color: #f2f2f2;
    padding: 20px 0;
    text-align: center;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    margin: 0;
    color: #333;
}

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