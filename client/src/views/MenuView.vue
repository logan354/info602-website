<template>
    <Navbar />
    <!-- Splash image with centered text -->
    <div class="splash-container">
        <div class="splash-text">
            Explore our incredible menu.
        </div>
    </div>
    <div class="splash-image-placeholder"></div>
    <div class="container">
        <div class="menu-options">
            <h2>Our menu options.</h2>
            <div class="menu-categories">
                <div v-for="(category, index) in categories" :key="index" class="menu-category-wrapper">
                    <div v-if="expanded !== index" :class="['menu-category', expanded === index ? 'expanded' : '']">
                        <a @click.prevent="toggleDropdown(index)">
                            <img :src="category.imgSrc" :alt="category.name">
                        </a>
                        <p>{{ category.name }}</p>
                        <transition name="fade">
                            <div v-if="dropdowns[index]" class="dropdown-content">
                                <p>{{ category.description }}</p>
                                <router-link to="/contact-us">
                                    <button class="contact-button">Contact Us</button>
                                </router-link>
                            </div>
                        </transition>
                    </div>
                    <div v-else class="placeholder"></div>
                </div>
                <div v-if="expanded !== null" class="expanded-container">
                    <div :class="['menu-category', 'expanded']">
                        <a @click.prevent="toggleDropdown(expanded)">
                            <img :src="categories[expanded].imgSrc" :alt="categories[expanded].name">
                        </a>
                        <div class="expanded-content">
                            <h3>{{ categories[expanded].name }}</h3>
                            <transition name="fade">
                                <div class="dropdown-content">
                                    <p>{{ categories[expanded].description }}</p>
                                    <router-link to="/contact-us">
                                        <button class="contact-button">Contact Us</button>
                                    </router-link>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Navbar from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";

// Define ref for each dropdown visibility and expanded state
const dropdowns = ref(Array(12).fill(false));
const expanded = ref(null); // Use a single ref to track the currently expanded index

// Function to toggle the visibility of dropdowns and expanded state
const toggleDropdown = (index) => {
    if (expanded.value === index) {
        // If the clicked item is already expanded, collapse it
        dropdowns.value[index] = false;
        expanded.value = null;
    } else {
        // Collapse any previously expanded item
        if (expanded.value !== null) {
            dropdowns.value[expanded.value] = false;
        }
        // Expand the clicked item
        dropdowns.value[index] = true;
        expanded.value = index;
    }
};

// Categories data
const categories = [
    { name: 'The Village Menu', imgSrc: '../src/assets/images/menu/food1.jpg', description: 'The Village Menu option resembles the quintessential menu, consisting of plain white rice, three vegetable dishes, and a meat or fish dish. Seasonal vegetables will complement the thick creamy coconut milk gravy. This menu will be catered to your requirements.' },
    { name: 'The Hungry Lankan', imgSrc: '../src/assets/images/menu/food3.jpg', description: 'The family meals in Sri Lanka are mostly buffet style – ‘serve as much as you want’. To cater to this requirement, ‘The Hungry Lankan’ is all about quantity. If you have a large appetite, this option might suit you. This menu will be catered to your requirements.' },
    { name: 'Traditional Yellow Rice', imgSrc: '../src/assets/images/menu/food10.jpg', description: 'Traditionally, people in Sri Lanka go the extra mile to prepare this menu for a special family occasion. As the name implies, turmeric is used to colour the rice to a yellow colour – hence the name ‘Yellow Rice’. This is traditionally cooked with basmati rice or traditional Sri Lanka samba rice, served with accompaniments including meat, brinjal dry curry, potatoes cooked in coconut milk, sauteed green beans, a salad and pappadum. The choice of dishes to accompany the traditional ‘Yellow Rice’ menu will be catered to your desires.' },
    { name: 'Specialty Biriyani', imgSrc: '../src/assets/images/menu/food13.jpg', description: 'At Rasai, a Biriyani meal is the ultimate special occasion dinner menu.  Biriyani is traditionally basmati or traditional Sri Lankan samba rice cooked in a rich, delicious meat, with sultanas and cashew nuts. The meat is of your choice. Accompanying the biriyani are Rasai’s mouth-watering delicious array of dishes, including a choice of a dry potato dish, baked or fried fish, fish cutlets, sauteed green beans, brinjals that are deep fried and smothered in a sweet chilli coconut sauce, pappadum and vegetable pickle. This ultimate specialty is very rich and filling! Tell us what you would like to be included in this menu option!' },
    { name: 'Solely Vegetarian', imgSrc: '../src/assets/images/menu/food8.jpg', description: 'At Rasai, we know that not all menus have to have meat or fish included to make it special. This option caters to a menu that is just as delicious and rich and will include your choice of seasonal vegetables and the needs of your palette..' },
    { name: 'Dutch Lamprais', imgSrc: '../src/assets/images/menu/food17.jpg', description: 'This is a rich meal which is cooked twice. First the rice and accompaniments such as dry coconut-based curries, such as chicken, potato, beans, caramelized onion, cooking banana, egg and fish cakes are cooked separately. Then this food is wrapped in a banana leaf and baked. On opening up the ‘parceled’ meal, you get the smokiness smell of the banana leaf, and the taste is just divine! It is truly a unique meal. Try it, you will not be disappointed!' },
    { name: 'String Hopper Menu', imgSrc: '../src/assets/images/menu/food21.jpg', description: 'As the name implies this traditional specialty is made out of rice flour that is squeezed through a mould to form thin ‘strings’ that are spiraled to look like a soft pancake.  These ‘pancakes’ are then steamed to hold its shape. Traditionally, this is served with ‘kiri hoddi’ or coconut milk gravy, coconut sambol, a dry potato dish or dhal curry and any fish or meat curry. In Sri Lanka, string hoppers are usually had for breakfast but can equally be a lunch or dinner menu. If you are not a real rice fan, then do not miss out trying this menu! It can be catered to your needs.' },
    { name: 'Roti Menu', imgSrc: '../src/assets/images/menu/food24.jpg', description: ' In Sri Lanka, there is a real wide choice of rotis (or flat bread). At Rasai, there is a choice available to you also! These can range from coconut roti (made from flour, grated fresh coconut, onion, green chillies); godambara roti (where the dough is soaked in oil to make it very thin once it is rolled out. This can be a plain roti or an egg roti); stuffed roti (either with a dry potato curry or potato and peas) or just plain white/wholemeal roti. The accompaniment for any roti is really your choice. You can have any of these rotis with just an onion sambol, an onion/dry fish chutney, dry potato curry or a meat or fish curry. Talk to us to see what would suit your requirements.' },
    { name: 'Coconut Milk Rice', imgSrc: '../src/assets/images/menu/food4.jpg', description: 'As the name implies, this is rice cooked in coconut milk. In Sri Lanka, this is usually a breakfast staple and is usually made for a special occasion, such as a special event, a birthday, etc. This staple can be made with just rice or made with rice and mung beans for extra flavour. This is usually accompanied by an onion sambol or onion/dry fish chutney and sometimes with a red fish curry. Talk to us about your needs!' },
    { name: 'Finger Food Palette', imgSrc: '../src/assets/images/menu/food28.jpg', description: 'This palette includes a selection of traditional Sri Lankan finger food, ideal for morning or afternoon tea. The selection ranges from fish/meat cutlets (as it is traditionally called or also known as fish/meat cakes); patis (a traditional pastry with filling of either fish/meat and potatoes and then baked); Fish/meat rolls (a thin pancake that includes fish/meat filling, crumbed and fried); traditional tuna sandwiches; caramelized onion puffs, just to name a few. Talk to us if you would like to have a morning or afternoon tea in traditional Sri Lankan style!' },
    { name: 'Specialty Dishes', imgSrc: '../src/assets/images/menu/food30.jpg', description: 'Specialty 1: Pork Pie – A flaky pastry pie, filled with pork and potatoes cooked in rich coconut gravy. Specialty 2: Chicken Pie – A flaky pastry pie, filled with chicken, potatoes and mushrooms cooked in a rich coconut gravy. Specialty 3: Quiche – Your traditional ham and egg quiche but with a Sri Lankan twist!' },
    { name: 'Desserts', imgSrc: '../src/assets/images/menu/food33.jpg', description: 'Wattalappam – a traditional Sri Lankan dessert made from coconut milk and jaggery (sultanas and cashew nuts are optional). Traditional Sri Lankan sweets (such as milk toffee, coconut ice). Apple pie – with a cinnamon twist. Spiced fruit salad (seasonal). Kiri Panni – a popular Sri Lankan dessert of yoghurt and treacle. Other desserts are available on request.' }
];
</script>

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
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-bottom: 50px;
}

.menu-options {
    max-width: 1200px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    text-align: center;
}

.menu-options h2 {
    margin-bottom: 20px;
}

.menu-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative; /* Added for expanded item positioning */
}

.menu-category-wrapper {
    position: relative;
}

.menu-category {
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 10px;
    width: 220px;
    transition: all 0.5s ease; /* Increased duration for smoother transitions */
}

.menu-category img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    display: block;
    transition: width 0.5s ease; /* Increased duration for smoother transitions */
}

.menu-category.expanded {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    max-width: 80%; /* Set maximum width */
    width: auto; /* Set width to auto */
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease; /* Increased duration for smoother transitions */
    display: flex;
    flex-direction: row; /* Added for image and content alignment */
    align-items: center; /* Added for centering content vertically */
}

.menu-category.expanded img {
    width: 400px;
    transition: width 0.5s ease; /* Increased duration for smoother transitions */
    margin-right: 20px; /* Added space between image and content */
}

.menu-category.expanded .dropdown-content {
    display: block !important;
}

.menu-category.expanded .expanded-content {
    flex: 1;
    text-align: left; /* Align text to the left */
}

.placeholder {
    width: 220px;
    height: 300px; /* Height to match the expanded content */
    margin: 10px;
    opacity: 0; /* Make the placeholder transparent */
}

.dropdown-content {
    margin-top: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    display: none;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}

/* Splash image styling */
.splash-container {
    position: relative;
    width: 100%;
    height: 900px; /* Set the height of the splash container */
    background-color: #160101; /* Placeholder background color */
    background-image: url('../assets/images/splash/splash5.jpg');
    background-repeat: no-repeat; /* Prevent the image from repeating */
    background-size: cover; /* Cover the entire area */
    background-position: center; /* Center the image */
    display: flex;
    align-items: center;
    justify-content: center;
}

.splash-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 0; /* Ensure the overlay is behind the text */
}

.splash-text {
    position: absolute;
    color: white;
    font-size: 3em; /* Adjust the font size as needed */
    font-weight: bold;
    text-align: center;
    z-index: 1;
}

.contact-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.contact-button:hover {
    background-color: #0056b3;
}
</style>
