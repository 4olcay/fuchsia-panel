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
    <div class="character-detail">
      <div class="character-info">
        <h1 style="font-size: 16px">
          {{ character.name }} ({{ character.level }} seviye)
        </h1>
        <hr />
        <ul>
          <li><strong>KARAKTER BİLGİLERİ</strong></li>
          <li>
            <strong>Durumu: </strong>
            {{ getCharacterStatus(character.is_active) }}
          </li>
          <br />
          <li v-if="character.last_login">
            <strong>Son giriş:</strong> {{ character.last_login }}
          </li>
          <li v-if="character.last_ip">
            <strong>Son IP:</strong> {{ character.last_ip }}
          </li>
          <br />
          <li>
            <strong>Oyunda geçirilen süre:</strong>
            {{ character.total_minutes }} dakika
          </li>
          <hr />
          <li v-if="character.ssn_number"><strong>ROLEPLAY</strong></li>
          <li v-if="character.ssn_number">
            <strong>SSN: </strong> {{ character.ssn_number }}
          </li>
          <li>
            <strong>Cinsiyet:</strong>
            {{ getCharacterGender(character.gender) }}
          </li>
          <li>
            <strong>Ten rengi:</strong>
            {{ getCharacterRace(character.race) }}
          </li>
          <li v-if="character.ssn_number">
            <strong>Sürücü Lisansı: </strong>
            {{ getCharacterDriverLicense(character.driver_license) }}
          </li>
          <hr />
          <li v-if="character.cash"><strong>EKONOMİ</strong></li>
          <li v-if="character.cash">
            <strong>Nakit para: </strong> ${{ character.cash }}
          </li>
        </ul>
      </div>
      <div
        class="character-skin"
        style="
          background-image: url(https://cdn.discordapp.com/attachments/716317687017504839/933852403793559632/-1.png);
        "
      ></div>
    </div>
  </div>
</template>
<style scoped>
.character-detail {
  padding-top: 10px;
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.character-skin {
  width: 90px;
  height: 90px;
}

.character-info {
  width: 500px;
}

@media (max-width: 1020px) {
  .character-detail {
    width: 300px;
    flex-direction: column;
  }

  .character-info {
    width: 300px;
  }
}
</style>
<script>
import axios from "axios";

import { useCookies } from "vue3-cookies";
import { useRoute } from "vue-router";
const { cookies } = useCookies();

export default {
  name: "CharDetails",
  data: function () {
    return {
      isLoading: true,
      character: [],
    };
  },
  methods: {
    getCharacterStatus: function (is_active) {
      let status = "";

      switch (is_active) {
        case 1:
          status = "Aktif Karakter";
          break;
        case 2:
          status = "Yasaklı Karakter";
          break;
      }

      return status;
    },
    getCharacterGender: function (gender) {
      let gender_text = "";

      switch (gender) {
        case 1:
          gender_text = "Erkek";
          break;
        case 2:
          gender_text = "Kadın";
          break;
      }

      return gender_text;
    },
    getCharacterRace: function (race) {
      let race_text = "";

      switch (race) {
        case 1:
          race_text = "Beyaz";
          break;
        case 2:
          race_text = "Siyah";
          break;
      }

      return race_text;
    },
    getCharacterDriverLicense: function (driver_license) {
      let license_text = "";

      switch (driver_license) {
        case true:
          license_text = "Var";
          break;
        case false:
          license_text = "Yok";
          break;
      }

      return license_text;
    },
  },
  mounted: async function () {
    const route = useRoute();

    await axios
      .get("http://localhost:3010/character/detail?name=" + route.params.name, {
        headers: {
          token: cookies.get("auth_token"),
        },
      })
      .then((res) => {
        this.character = res.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>