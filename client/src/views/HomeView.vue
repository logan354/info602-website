<script setup>
    import Navbar from "../components/Navigation.vue";
    import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://via.placeholder.com/1920x1080" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/1920x1080" class="d-block" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/1920x1080" class="d-block" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <div class="container">
        <div class="jumbotron">
            <h2>Your Premier Catering Service</h2>
            <p>From intimate gatherings to grand celebrations, we provide delicious food and exceptional service to make
                your event unforgettable.</p>
            <a href="booking.html"><button>Book Now</button></a>
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


header h1 {
    margin: 0;
    color: #333;
}

.carousel-inner img {
    width: calc(100% - 40px);
    /* Adjusted width */
    height: calc(100vh - 40px);
    /* Adjusted height */
    object-fit: cover;
    margin: 20px;
    /* Added margin for padding */
}

.jumbotron {
    background-color: #f9f9f9;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 100px;
    left: 60px;
    z-index: 1;
    /* Ensure the jumbotron is above the carousel */
}
</style>

<script>
</script>