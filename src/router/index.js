import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SleepTeaPage from '../views/SleepTeaPage.vue'
import BeautyTeaPage from '../views/BeautyTeaPage.vue'
import GingerTeaPage from '../views/GingerTeaPage.vue'
import ShanTuyetPage from '../views/ShanTuyetPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import BlogPage from '../views/BlogPage.vue'
import BlogDetailPage from '../views/BlogDetailPage.vue'
import GalleryPage from '../views/GalleryPage.vue'
import ShopPage from '../views/ShopPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tra-hoa-ngu-ngon',
    name: 'SleepTea',
    component: SleepTeaPage
  },
  {
    path: '/tra-hoa-duong-nhan',
    name: 'BeautyTea',
    component: BeautyTeaPage
  },
  {
    path: '/tra-gung-tieu-hoa',
    name: 'GingerTea',
    component: GingerTeaPage
  },
  {
    path: '/shan-tuyet',
    name: 'ShanTuyet',
    component: ShanTuyetPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage
  },
  {
    path: '/blog/tra-hoa-cuc-tao-do-ky-tu',
    name: 'BlogDetail',
    component: BlogDetailPage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
