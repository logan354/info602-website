<script setup>
import Navigation from "../../components/Navigation.vue";
import DashboardSideNavigation from "../../components/dashboard/DashboardSideNavigation.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
    <Navigation />
    <div class="_container">
        <div class="side-navigation">
            <DashboardSideNavigation />
        </div>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt a eum quas fuga modi magnam enim
            est libero voluptates dolorum deleniti esse officiis, sunt porro voluptatum possimus maxime aliquam.
        </div>
    </div>
    <Footer />
</template>

<style scoped>
._container {
    display: flex;
    height: 1000px;
    width: 100%;
}

.side-navigation {
    padding: 0px;
}

.content {
    padding: 20px;
}
</style>

<script>
</script>