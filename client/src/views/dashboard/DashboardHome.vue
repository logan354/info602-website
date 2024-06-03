<script setup>
import Navigation from "../../components/Navigation.vue";
import DashboardSideNavigation from "../../components/dashboard/DashboardSideNavigation.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
    <Navigation />
    <div class="side-navigation">
        <DashboardSideNavigation />
        <div class="container">
            HOME DASHBOARD HERE
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.side-navigation {
    display: grid;
    grid-template-columns: 1fr 5fr;
}
</style>

<script>

</script>