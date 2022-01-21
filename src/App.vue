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
#ucp-warn {
  background-color: #fff0a8;
  border-radius: 5px;
  color: #4c4c4c;
  padding: 5px 7px;
}

#ucp-error {
  margin: 10px 0;
  background-color: #ff9090;
  border-radius: 5px;
  color: #4c4c4c;
  padding: 5px 7px;
}
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