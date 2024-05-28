<script setup>
import Navbar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <!-- Splash image placeholder -->
    <div class="splash-image-placeholder"></div>

    <div class="container">
        <div class="quote">
            <p>"At Rasai, we believe in delivering more than just food. We create experiences that bring people together."</p>
            <p>- Owner of Rasai</p>
        </div>
        
        <div class="info-columns">
            <div class="info-box">
                <h3>Our Food</h3>
                <p>We provide a diverse menu that caters to all tastes and dietary preferences, ensuring every guest leaves satisfied.</p>
                <button class="learn-more">Learn More</button>
            </div>
            <div class="info-box">
                <h3>Our Kitchen</h3>
                <p>Our state-of-the-art kitchen is where culinary magic happens. It's equipped with the latest technology and staffed by talented chefs.</p>
                <button class="learn-more">Learn More</button>
            </div>
            <div class="info-box">
                <h3>Our Ingredients</h3>
                <p>We source the finest ingredients from local farmers and suppliers to ensure the highest quality in every dish we prepare.</p>
                <button class="learn-more">Learn More</button>
            </div>
        </div>
        
        <div class="quality-assurance">
            <h3>Quality Assurance</h3>
            <p>At Rasai, we are committed to providing the highest standards of quality in every aspect of our service. Our rigorous quality assurance process ensures that every dish is prepared with the utmost care and precision, meeting all health and safety regulations. We take pride in our attention to detail and our dedication to excellence, so you can enjoy peace of mind knowing that your food is in good hands.</p>
            <button class="learn-more">Learn More</button>
        </div>
        
        <div class="gallery">
            <div class="image-grid">
                <!-- Placeholder images go here -->
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <div class="gallery-image">
                    <img src="https://via.placeholder.com/500" alt="Placeholder Image">
                </div>
                <!-- Repeat this for each image -->
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
    background-color: #000; /* Set background color to black */
}

header {
    background-color: #f2f2f2;
    padding: 20px;
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



.quote,
.info-columns,
.quality-assurance,
.gallery {
    text-align: center;
    margin: 40px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.quote {
    font-style: italic;
    color: #000; /* Quote text color */
    font-size: 1.5rem; /* Increased font size */
    font-weight: bold;
}

.info-columns {
    display: flex;
    justify-content: space-around;
}

.info-box {
    padding: 20px;
    width: calc((100% - 40px) / 3); /* Adjusted width calculation */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
}

.info-box h3 {
    margin-top: 0;
}

.learn-more {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: transparent;
    color: #333;
    border: 2px solid #333;
    border-radius: 30px;
    cursor: pointer;
    align-self: center;
    font-weight: bold;
}

.learn-more:hover {
    background-color: #333;
    color: #fff;
}

.quality-assurance h3,
.gallery h3 {
    margin-top: 0;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    justify-items: center;
}

.gallery-image img {
    width: 100%;
    height: auto;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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

</style>

<script>
</script>
