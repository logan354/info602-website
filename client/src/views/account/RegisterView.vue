<script setup>
    import Navbar from "../../components/Navigation.vue";
    import Footer from "../../components/Footer.vue";
</script>

<template>
    <Navbar />
    <div class="container">
        <form id="registration-form" action="register.php" method="POST">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required>
            </div>
            <button type="submit">Register</button>
        </form>
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