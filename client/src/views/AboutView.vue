<script setup>
import Navbar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <!-- Splash image placeholder -->
    <div class="splash-image-placeholder"></div>
    <div class="container">
        <div class="about-content">
            <h2>Our Story</h2>
            <p class="paragraph">Rasai Catering has been serving delicious meals and providing exceptional service since 2008. We started
                as a small family-owned business, and over the years, we have grown to become one of the most trusted
                names in the catering industry.</p>
            <a>
                <img src="../assets/images/about/divider2.png" height="100px">
            </a>
            <h2>Our Mission</h2>
            <p class="paragraph">Our mission is to make every event memorable by delivering mouthwatering dishes and outstanding service.
                We strive to exceed our customers' expectations and create unforgettable dining experiences.</p>
            <a>
                <img src="../assets/images/about/divider2.png" height="100px">
            </a>
            <h2>Our Team</h2>
            <p class="paragraph">At Rasai Catering, we have a team of talented chefs, experienced event planners, and dedicated staff who
                are passionate about food and hospitality. Together, we work tirelessly to ensure that every event is a
                success.</p>
            <a>
                <img src="../assets/images/about/divider2.png" height="100px">
            </a>
            <a>
                <img src="../assets/images/about/owner.jpg" height="100px">
            </a>
            <div class="meet-owner">
                <h2>Meet the Owner</h2>
                <p class="paragraph">
Born in Colombo, Sri Lanka, and having lived in Papua New Guinea for most of my schooling years, I migrated to New Zealand in 1999. I grew up where food was the centre of almost everything, from family gatherings to special occasions. Yearly celebrations such as the Sinhala and Tamil New Year and Christmas means the preparation of authentic cuisine - that reflects the Sri Lankan tradition and made with intention and care.

The passion to share the authentic cuisine of Sri Lanka has inspired me to open the doors to Rasai.

I welcome you to my table!</p>
            </div>
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
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    flex-grow: 1;
    text-align: center; /* Center text */
}

.about-content {
    max-width: 800px;
    padding: 0 20px; /* Adjust padding */
    box-sizing: border-box;
    text-align: center; /* Center text */
}

.about-content h2 {
    margin-top: 100px; /* Add margin-top to space out headings */
}

.paragraph {
    margin-bottom: 100px; /* Add margin-bottom to space out paragraphs */
}

/* Splash image styling */
.splash-image {
    width: 100%;
    height: 300px; /* Set the height of the splash image */
}

.splash-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.splash-image-placeholder {
    width: 100%;
    height: 300px; /* Set the height of the splash image */
    background-color: #ccc; /* Placeholder background color */
    /* Alternatively, you can use a simple pattern as a background image */
    /* background-image: url('path/to/pattern.png'); */
    /* background-repeat: repeat; */
}

/* Add styles for Meet the Owner section */
.meet-owner {
    margin-top: 200px; /* Add margin-top for separation */
}

</style>

<script>
</script>
