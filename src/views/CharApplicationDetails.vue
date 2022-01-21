<template>
  <div v-if="isLoading">
    <center>
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        width="30"
      />
    </center>
  </div>
  <div v-if="!isLoading">
    <div id="ucp-warn">{{ message }}</div>
    <br />
    <strong>Karakter: </strong> {{ data.name }}
    <br />
    <strong>Hikaye: </strong> {{ data.history }}
  </div>
</template>
<script>
import axios from "axios";
import { useCookies } from "vue3-cookies";
import { useRoute } from "vue-router";
import { gameClient } from "@/client/gameClient";

const { cookies } = useCookies();

export default {
  name: "CharApplicationDetails",
  data: function () {
    return {
      isLoading: true,
      message: "",
      data: {},
    };
  },
  methods: {
    syncApplicationStatusMessage() {
      switch (this.data.is_waiting) {
        case true:
          this.message = "Bu karakter başvurusu henüz incelenmeyi bekliyor.";
          break;
        case false: {
          switch (this.data.is_approved) {
            case false:
              this.message = "Bu karakter başvurusu incelenmiş ve reddedilmiş.";
              break;
            case true:
              this.message =
                "Bu karakter başvurusu incelenmiş ve kabul edilmiş.";
              break;
          }

          break;
        }
      }
    },
  },
  mounted: async function () {
    const route = useRoute();

    const [response, error] = await gameClient.getCharApplicationDetails(
      cookies.get("auth_token"),
      route.params.name
    );

    if (!response) {
      return (window.location.href = process.env.VUE_APP_PANEL_URL);
    }

    this.data = response.data;
    this.isLoading = false;
    this.syncApplicationStatusMessage();
  },
};
</script>
