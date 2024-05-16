<script setup>
    import Navbar from "../components/Navigation.vue";
    import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="menu-options">
            <h2>Explore Our Menu</h2>
            <div class="menu-categories">
                <div class="menu-category">
                    <a href="#breakfast"><img src="" alt="Breakfast"></a>
                    <p>Breakfast</p>
                </div>
                <div class="menu-category">
                    <a href="#lunch"><img src="" alt="Lunch"></a>
                    <p>Lunch</p>
                </div>
                <div class="menu-category">
                    <a href="#dinner"><img src="" alt="Dinner"></a>
                    <p>Dinner</p>
                </div>
                <div class="menu-category">
                    <a href="#platters"><img src="" alt="Platters"></a>
                    <p>Platters</p>
                </div>
            </div>
        </div>
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

.menu-options {
    max-width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
}

.menu-categories {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.menu-category {
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}

.menu-category img {
    width: 200px;
    /* Adjust image size as needed */
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    display: block;
}

.menu-category p {
    margin: 10px 0;
}
</style>

<script>
</script>