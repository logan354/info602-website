<script setup>
import Navbar from "../../components/Navigation.vue";
import Footer from "../../components/Footer.vue";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const email = ref("");
const phone = ref("");
const termsAccepted = ref(false);
const errorMessage = ref("");
const loading = ref(false);

const validateForm = () => {
    if (password.value !== confirmPassword.value) {
        errorMessage.value = "Passwords do not match.";
        return false;
    }
    if (!termsAccepted.value) {
        errorMessage.value = "You must accept the terms and conditions.";
        return false;
    }
    return true;
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        loading.value = true;
        // Simulate a registration API call
        setTimeout(() => {
            loading.value = false;
            alert("Registration successful!");
            // Redirect to login or another page
        }, 2000);
    }
};
</script>

<template>
    <Navbar />
    <div class="splash-container">
        <div class="container">
            <form id="registration-form" @submit="handleSubmit">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" v-model="confirmPassword" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" v-model="phone" required>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="terms" v-model="termsAccepted" required>
                    <label for="terms">I agree to the <a href="/terms">terms and conditions</a></label>
                </div>
                <button type="submit" :disabled="loading">{{ loading ? "Registering..." : "Register" }}</button>
                <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </form>
        </div>
        <div class="splash-text">
            <!-- Splash text content -->
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

.splash-container {
    position: relative;
    width: 100%;
    height: 900px; /* Set the height of the splash container */
    background-color: #160101; /* Placeholder background color */
    background-image: url('../src/assets/images/splash/splash2.jpg');
    background-repeat: no-repeat; /* Prevent the image from repeating */
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the image */
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 400px;
    text-align: center;
    z-index: 1; /* Ensure the form is on top of the splash image */
}

form {
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #ffffff;
    opacity: 90%;
    margin: 0 auto; /* Center horizontally */
    text-align: left;
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
select,
input[type="password"] {
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

button:disabled {
    background-color: #9e9e9e;
}

button:hover:enabled {
    background-color: #45a049;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>

<script>
</script>