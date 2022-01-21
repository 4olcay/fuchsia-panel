import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NewCharApplication from '@/views/NewCharApplication.vue';
import CharDetails from '@/views/CharDetails.vue';
import CharApplicationDetails from '@/views/CharApplicationDetails.vue';
import { useCookies } from 'vue3-cookies';
import { smfClient } from '@/client/smfClient';
import { gameClient } from '@/client/gameClient';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: () => {
      checkIsUserLoggedIn();
    }
  },
  {
    path: '/karakter-basvurusu',
    name: 'NewCharApplication',
    component: NewCharApplication,
    beforeEnter: () => {
      checkIsUserLoggedIn();
      checkIsUserHaveCharApp();
    }
  },
  {
    path: '/karakter-basvurusu/:name',
    name: 'CharApplicationDetails',
    component: CharApplicationDetails,
    beforeEnter: () => {
      checkIsUserLoggedIn();
    }
  },
  {
    path: '/karakter/:name',
    name: 'CharDetails',
    component: CharDetails,
    beforeEnter: () => {
      checkIsUserLoggedIn();
    }
  }
]

async function checkIsUserLoggedIn() {
  const { cookies } = useCookies();
  const token = cookies.get("auth_token");

  if (!token) {
    return sendToAuthPage();
  }

  const [, error] = await smfClient.validateToken(token);

  if (error) {
    // console.log(error);
  }
}

async function checkIsUserHaveCharApp() {
  const { cookies } = useCookies();
  const token = cookies.get("auth_token");

  if (!token) {
    return sendToAuthPage();
  }

  const [response,] = await gameClient.checkIsUserHaveCharApp(token);

  if (response && response.data.name.length > 0) {
    return router.push('/karakter-basvurusu/' + response.data.name);
  }
}

function sendToAuthPage() {
  window.location.href = process.env.VUE_APP_AUTH_URL;
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router