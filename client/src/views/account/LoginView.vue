<script setup>
import Navbar from "../../components/Navigation.vue";
import Footer from "../../components/Footer.vue";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const errorMessage = ref("");
const loading = ref(false);
const showPassword = ref(false);

const validateForm = () => {
    if (!email.value || !password.value) {
        errorMessage.value = "All fields are required.";
        return false;
    }
    return true;
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
        loading.value = true;
        // Here you would make an API call to your backend to handle login and validation
        setTimeout(() => {
            loading.value = false;
            alert("Login successful!");
            // Redirect to another page
        }, 2000);
    }
};

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

function loginWithGoogle() {
    alert('Google login not implemented yet.');
    // Implement Google login functionality here
}

function loginWithFacebook() {
    alert('Facebook login not implemented yet.');
    // Implement Facebook login functionality here
}
</script>

<template>
    <Navbar />
    <!-- Splash image placeholder -->
    <div class="splash-image-placeholder"></div>
    <div class="container">
        <form id="login-form" @submit="handleSubmit">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <div class="password-container">
                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required>
                    <button type="button" class="show-password" @click="togglePasswordVisibility">
                        {{ showPassword ? "Hide" : "Show" }}
                    </button>
                </div>
            </div>
            <div class="form-group">
                <input type="checkbox" id="remember-me" v-model="rememberMe">
                <label for="remember-me">Remember Me</label>
            </div>
            <div class="form-group">
                <a href="/password-recovery">Forgot Password?</a>
            </div>
            <div class="form-group">
                <button type="submit" :disabled="loading">{{ loading ? "Logging in..." : "Login" }}</button>
            </div>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            <div class="social-login">
                <button @click="loginWithGoogle">Login with Google</button>
                <button @click="loginWithFacebook">Login with Facebook</button>
            </div>
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

.splash-image-placeholder {
    width: 100%;
    height: 300px; /* Set the height of the splash image */
    background-color: #ccc; /* Placeholder background color */
    /* Alternatively, you can use a simple pattern as a background image */
    /* background-image: url('path/to/pattern.png'); */
    /* background-repeat: repeat; */
}

.container {
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

form {
    width: 100%;
    max-width: 400px;
    padding: 40px 20px; /* Add padding-top and padding-bottom */
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

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
}

.password-container {
    position: relative;
    display: flex;
    align-items: center;
}

.password-container input {
    flex-grow: 1;
    padding-right: 50px; /* Ensure there is space for the button inside the input */
}

.show-password {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
}

.show-password:hover {
    color: #0056b3; /* Change color on hover */
}

.show-password:focus {
    outline: none;
}

button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

button[type="submit"]:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
    margin-top: 10px;
}

.social-login {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.social-login button {
    background-color: #3b5998; /* Default to Facebook color */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    flex-grow: 1;
    margin-right: 10px;
}

.social-login button:last-child {
    margin-right: 0;
}

.social-login button:hover {
    background-color: #333;
}
</style>
