<script setup>
import Navigation from "../../components/Navigation.vue";
import DashboardSideNavigation from "../../components/dashboard/DashboardSideNavigation.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
    <Navigation />
    <div class="side-navigation">
        <DashboardSideNavigation />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores illum deserunt in a deleniti, amet
        iste consequuntur distinctio, saepe enim vel tenetur optio quis quo quod praesentium nostrum sed?
    </div>
    <Footer />
</template>

<style scoped>
.side-navigation {
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100vh;
    width: 100vw;
}
</style>

<script>
</script>