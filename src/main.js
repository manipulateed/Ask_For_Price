import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Root from "./pages/Root.vue";
import DashboardLogin from "./pages/DashboardLogin.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "Root",
    component: Root,
  },
  {
    path: "/dashboard-login",
    name: "DashboardLogin",
    component: DashboardLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title =
    metaTitle ||
    "Odoo-Website-v17---Wireframes---Figma-Community-(Community)---1";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
