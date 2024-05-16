<script setup>
import Navbar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <div class="container">
        <form id="booking-form" action="submit_booking.php" method="POST">
            <div class="form-group">
                <label for="event-date">Event Date:</label>
                <input type="date" id="event-date" name="event_date" required>
            </div>
            <div class="form-group">
                <label for="event-time">Event Time:</label>
                <input type="time" id="event-time" name="event_time" required>
            </div>
            <div class="form-group">
                <label for="event-type">Type of Event:</label>
                <select id="event-type" name="event_type" required>
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="event-location">Event Location:</label>
                <input type="text" id="event-location" name="event_location" required>
            </div>
            <div class="form-group">
                <label for="emergency-contact">Emergency Contact Number:</label>
                <input type="tel" id="emergency-contact" name="emergency_contact" required>
            </div>
            <div class="form-group">
                <label for="guests">Number of Guests:</label>
                <input type="number" id="guests" name="guests" required>
            </div>
            <div class="form-group">
                <label for="details">Event Details:</label>
                <textarea id="details" name="details" rows="5" required></textarea>
            </div>
            <button type="submit">Submit Booking</button>
        </form>
    </div>
    <Footer />
</template>

<style>
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

form {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
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
    /* Added margin for spacing */
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

<script>
</script>
