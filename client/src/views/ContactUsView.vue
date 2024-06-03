<script setup>
import Navbar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="contact-info-wrapper">
            <div class="contact-info">
                <h2>Contact Information</h2>
                <p><strong>Rasai Catering</strong></p>
                <p>1234 Catering Street</p>
                <p>Culinary City, FL 56789</p>
                <p>Email: contact@rasaicatering.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Follow us on social media:</p>
            </div>
            <div class="social-media">
                <!-- Social Links -->
                <a class="btn btn-floating" href="https://www.facebook.com" role="button">
                    <img src="../assets/images/socials/facebook-dark.png" height="40px">
                </a>
                <a class="btn btn-floating" href="https://www.instagram.com" role="button">
                    <img src="../assets/images/socials/instagram-dark.png" height="40px">
                </a>
                <a class="btn btn-floating" href="https://www.twitter.com" role="button">
                    <img src="../assets/images/socials/twitter-dark.png" height="40px">
                </a>
            </div>
        </div>
        <form id="booking-form" action="submit_booking.php" method="POST">
            <div class="form-group">
                <label for="booking-type-id">Booking Type (Required):</label>
                <select id="booking-type-id" name="booking_type_id" required>
                    <option value="">Select Booking Type</option>
                    <option value="1">Wedding</option>
                    <option value="2">Corporate Event</option>
                    <option value="3">Birthday Party</option>
                    <option value="4">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="menu-option-id">Menu Option (Required):</label>
                <select id="menu-option-id" name="menu-option_id" required>
                    <option value="">Select Menu Option</option>
                    <option value="1">The Village Menu</option>
                    <option value="2">The Hungry Lankan</option>
                    <option value="3">Traditional Yellow Rice</option>
                    <option value="4">Speciality Biriyani</option>
                    <option value="5">Solely Vegetarian</option>
                    <option value="6">Dutch Lamprais</option>
                    <option value="7">String Hopper Menu</option>
                    <option value="8">Roti Menu</option>
                    <option value="9">Coconut Milk Rice</option>
                    <option value="10">Finger Food Palette</option>
                    <option value="11">Speciality Dishes</option>
                    <option value="12">Desserts</option>
                    <option value="13">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="menu_desc">Menu Alterations (If Applicable):</label>
                <textarea id="menu_desc" name="menu_desc" rows="5" maxlength="280" required></textarea>
            </div>
            <div class="form-group">
                <label for="booking-date">Booking Date (Required):</label>
                <input type="date" id="booking-date" name="booking_date" required>
            </div>
            <div class="form-group">
                <label for="booking-location">Event Location (If Applicable):</label>
                <input type="text" id="booking-location" name="booking_location" required>
            </div>
            <div class="form-group">
                <label for="guests">Number of Guests (Required):</label>
                <input type="number" id="guests" name="guests" required>
            </div>
            <div class="form-group">
                <label for="notes">Event Details (If Applicable):</label>
                <textarea id="notes" name="notes" rows="5" maxlength="280" required></textarea>
            </div>
            <button type="submit">Submit Booking</button>
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
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-grow: 1;
}

.contact-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.contact-info {
    margin-top: 0;
    margin-bottom: 20px;
    margin-left: 50px;
}

.contact-info h2 {
    margin-top: 0;
}

.social-media {
    display: flex;
    margin-top: auto; /* Pushes the social media buttons to the bottom */
    margin-left: 40px;
}

form {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    flex: 1;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
input[type="number"],
textarea,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #45a049;
}
</style>
