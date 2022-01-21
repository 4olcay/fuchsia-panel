import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import CharApplication from '@/views/CharApplication.vue';
import CharDetails from '@/views/CharDetails.vue';
import { useCookies } from 'vue3-cookies';
import axios from 'axios';

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
    name: 'CharApplication',
    component: CharApplication,
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

function checkIsUserLoggedIn() {
  const { cookies } = useCookies();
  const token = cookies.get("auth_token");

  if (!token) {
    return window.location.href = 'http://localhost/fuchsia21/auth.php';
  }

  axios.post('http://localhost:3000/auth/validate-token', {
    token: token
  }).then(res => {
    if (!res.data) {
      return window.location.href = 'http://localhost/fuchsia21/auth.php';
    }
  });
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router