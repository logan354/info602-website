<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import { store } from "@/store";
import { apiURL } from "@/api";


const router = useRouter();

const booking_type_id = ref("");
const menu_ids = ref("");
const date = ref("");
const location = ref("");
const guests = ref("");
const notes = ref("");
const loading = ref(false);

const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
        loading.value = true;

        // Small error checking
        const booking = {
            user_id: store.user.User_Table_id,
            booking_type_id: booking_type_id.value === 0 ? 1 : booking_type_id.value,
            date: date.value,
            location: location.value,
            guests: guests.value,
            notes: notes.value,
            menu_ids: menu_ids.value.includes(0) || menu_ids.value.includes("0") ? [0] : menu_ids.value
        }

        try {
            const res = await fetch(apiURL + "/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ booking: booking })
            });

            if (res.status !== 200) {
                loading.value = false;

                alert("Booking failed!\nServer Error");
                return;
            }
        }
        catch (e) {
            loading.value = false;
            alert("Booking failed!\n" + e.message);
            return;
        }

        loading.value = false;
        alert("Booking successful!");
        clearForm();
    }
}

const validateForm = () => {
    // Out of time and not my job
    return true;
}

const clearForm = () => {
    booking_type_id.value = 0,
    menu_ids.value = [0],
    date.value = ""
    location.value = ""
    guests.value = ""
    notes.value = ""
}
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
        <form id="booking-form" @submit="handleSubmit">
            <div class="form-group">
                <label for="booking-type-id">Booking Type (Required):</label>
                <select id="booking-type-id" name="booking_type_id" v-model="booking_type_id" required>
                    <option value="0">Select Booking Type</option>
                    <option value="1">Wedding</option>
                    <option value="2">Corporate Event</option>
                    <option value="3">Birthday Party</option>
                    <option value="4">Conference</option>
                    <option value="5">Private Dinner</option>
                    <option value="6">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="menu-option-id">Menu Option (Required):</label>
                <select id="menu-option-id" name="menu-option_id" v-model="menu_ids" multiple required>
                    <option value="0">Select Menu Option</option>
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
                <label for="booking-date">Booking Date (Required):</label>
                <input type="date" id="booking-date" name="booking_date" v-model="date" required>
            </div>
            <div class="form-group">
                <label for="booking-location">Event Location (If Applicable):</label>
                <input type="text" id="booking-location" name="booking_location" v-model="location" required>
            </div>
            <div class="form-group">
                <label for="guests">Number of Guests (Required):</label>
                <input type="number" id="guests" name="guests" v-model="guests" required>
            </div>
            <div class="form-group">
                <label for="notes">Event Details (If Applicable):</label>
                <textarea id="notes" name="notes" rows="5" maxlength="280" v-model="notes"></textarea>
            </div>
            <button type="submit" :disabled="loading">{{ loading ? "Submitting Booking..." : "Submit Booking" }}</button>
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
    margin-top: auto;
    /* Pushes the social media buttons to the bottom */
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

<script>
</script>