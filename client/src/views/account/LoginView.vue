<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Navbar from "../../components/Navigation.vue";
import Footer from "../../components/Footer.vue";
import { store } from "@/store";
import { apiURL } from "@/api";

const router = useRouter();

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const errorMessage = ref("");
const loading = ref(false);

const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
        loading.value = true;

        try {
            const res = await fetch(apiURL + "/users?username=" + username.value, {
                method: "GET"
            });

            if (res.status !== 200) {
                loading.value = false;

                if (res.status === 204) {
                    errorMessage.value = "Incorrect Username";
                }
                else {
                    alert("Login failed!\nServer Error");
                }

                return;
            }

            store.user = await res.json();
        }
        catch (e) {
            loading.value = false;
            alert("Login failed!\n" + e.message);
            return;
        }

        loading.value = false;
        alert("Login successful!");
        clearForm();

        // Route to home page
        router.push({ path: "/" });
    }
}

const validateForm = () => {
    if (!username.value || !password.value) {
        errorMessage.value = "Please enter both username and password.";
        return false;
    }
    return true;
}

const clearForm = () => {
    username.value = ""
    password.value = ""
    rememberMe.value = false
    errorMessage.value = ""
}
</script>

<template>
    <Navbar />
    <div class="splash-container">
        <div class="container">
            <form id="login-form" @submit="handleSubmit">
                <div class="form-group">
                    <label for="username">Username or Email:</label>
                    <input type="text" id="username" v-model="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" required>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="remember-me" v-model="rememberMe">
                    <label for="remember-me">Remember Me</label>
                </div>
                <div class="form-group">
                    <RouterLink to="/">Forgot Password?</RouterLink>
                </div>
                <button type="submit" :disabled="loading">{{ loading ? "Logging in..." : "Log In" }}</button>
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
    height: 900px;
    /* Set the height of the splash container */
    background-color: #160101;
    /* Placeholder background color */
    background-image: url('../src/assets/images/splash/splash4.jpg');
    background-repeat: no-repeat;
    /* Prevent the image from repeating */
    background-size: cover;
    /* Cover the entire area */
    background-position: center;
    /* Center the image */
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 400px;
    text-align: center;
    z-index: 1;
    /* Ensure the form is on top of the splash image */
}

form {
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #ffffff;
    opacity: 90%;
    margin: 0 auto;
    /* Center horizontally */
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