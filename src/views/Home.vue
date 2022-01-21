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
    <div class="character-list">
      <router-link
        v-for="character in characterList"
        :to="{ path: '/karakter/' + character.name }"
      >
        <div class="character-panel">
          <div
            class="character-skin"
            style="
              background-image: url(https://cdn.discordapp.com/attachments/716317687017504839/933852403793559632/-1.png);
            "
          ></div>
          <div class="character-detail">
            <h3>{{ character.name }} (#{{ character.id }})</h3>
            (1 seviye)
            <br />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.character-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.character-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: 120px;
  border: 1px solid #ebebeb;
  background-color: #f1f1f1;
  padding: 5px;
  border-radius: 3px;
  margin-right: 10px;
}

.character-skin {
  width: 90px;
  height: 90px;
}

.character-detail {
  width: 270px;
  text-align: right;
}

@media (max-width: 500px) {
  .character-list {
    flex-direction: column;
    align-items: center;
  }

  .character-panel {
    width: 370px;
    flex-direction: column;
    margin-top: 10px;
    height: 190px;
  }

  .character-detail {
    text-align: center;
  }
}
</style>

<script>
import axios from "axios";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export default {
  name: "Home",
  data: function () {
    return {
      isLoading: true,
      characterList: [],
    };
  },
  mounted: async function () {
    await axios
      .post(process.env.VUE_APP_GAME_API + "/character/list", {
        accountId: 0,
        token: cookies.get("auth_token"),
      })
      .then((res) => {
        this.characterList = res.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  },
};
</script>
