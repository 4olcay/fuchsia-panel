<template>
  <TopSection />
  <Header />
  <div id="wrapper">
    <div class="container">
      <div class="art">
        <div id="content_section">
          <div id="main_content_section">
            <router-view />
          </div>
        </div>
      </div>
      <!-- #main_content_section -->
    </div>
    <!-- #content_section -->
  </div>
  <!-- #wrapper -->
</template>

<style>
</style>

<script>
import TopSection from "@/components/TopSection.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    TopSection,
    Header,
  },
};
</script>