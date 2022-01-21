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
    <ul v-if="errors.length > 0" id="ucp-error">
      <li><strong>Karakter başvurunuz gönderilemedi... çünkü,</strong></li>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    {{ response }}
    <div style="padding: 5px">
      <h3>Karakter Başvurusu</h3>
      <p>
        Karakter başvurusu yapmadan önce, lütfen forum sisteminde üyeliği olan
        herkesin forum kurallarını okuduğunu ve kabul ettiğini; sunucuda
        karakteri olan herkesi de oyun kurallarını okuduğunu ve kabul ettiğini
        unutmayın. Henüz okumadıysanız da, herhangi bir yaptırımla karşı karşıya
        kalmamak için forumda kurallar bölümünü ziyaret ediniz. Bütün kurallar,
        Fuchsia Roleplay oyuncularının sağlıklı bir oyun deneyimi yaşaması için
        hazırlanmıştır. Kurallara uymayan bütün kullanıcılar, bu düşünce göz
        önüne alınarak platformda yaptırımla karşı karşıya kalabilir.
      </p>
    </div>
    <hr />
    <div id="application">
      <div class="form-row">
        <div class="form-column">
          <div class="form-item"><strong>Karakter Adı</strong></div>
          <div class="form-item">
            <input type="text" placeholder="Karakter Adı" v-model="char_name" />
          </div>
        </div>
        <div class="form-column">
          <div class="form-item"><strong>Karakter Soyadı</strong></div>
          <div class="form-item">
            <input
              type="text"
              placeholder="Karakter Soyadı"
              v-model="char_lastname"
            />
          </div>
        </div>
      </div>
      <div class="forum-column">
        <div class="form-column" style="padding: 10px">
          <strong>Karakter Hikayesi</strong>
          <textarea
            placeholder="Karakter Hikayesi"
            v-model="char_history"
          ></textarea>
        </div>
        <div class="form-column">
          <button class="button" @click.native="sendApplication">
            başvuruyu gönder
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useCookies } from "vue3-cookies";
import router from "@/router";

const { cookies } = useCookies();

export default {
  name: "NewCharApplication",
  data: function () {
    return {
      char_name: "",
      char_lastname: "",
      char_history: "",
      response: "",
      errors: [],
    };
  },
  methods: {
    async sendApplication() {
      this.errors = [];

      this.char_name = this.char_name.trim();
      this.char_lastname = this.char_lastname.trim();

      if (!this.char_name || !this.char_name.trim)
        this.errors.push("Karakter adı girmediniz.");
      else if (this.char_name.length < 3)
        this.errors.push("Karakter adı 3 haneden kısa olamaz.");

      if (!this.char_lastname || !this.char_lastname.trim)
        this.errors.push("Karakter soyadı girmediniz.");
      else if (this.char_lastname.length < 3)
        this.errors.push("Karakter soyadı 3 haneden kısa olamaz.");

      if (!this.char_history || !this.char_history.trim)
        this.errors.push("Karakter hikayesi yazmadınız.");

      if (this.errors.length > 0) {
        return;
      }

      await axios
        .post(
          process.env.VUE_APP_GAME_API + "/character/application",
          {
            name: this.char_name + "_" + this.char_lastname,
            history: this.char_history,
          },
          {
            headers: {
              token: cookies.get("auth_token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.response = res.data;
          router.push(
            "/karakter-basvurusu/" + this.char_name + "_" + this.char_lastname
          );
        })
        .catch((error) => {
          this.response = error.response.data.message;
        });
    },
  },
};
</script>

<style scoped>
.form-column {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.form-row {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
</style>