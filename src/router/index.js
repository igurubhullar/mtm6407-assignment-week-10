import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../views/ContactList.vue";
import ContactDetails from "../views/ContactDetails.vue";
import ContactForm from "../views/ContactForm.vue";
import ContactEdit from "../views/ContactEdit.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: ContactList,
    },
    {
      path: "/contact/:id",
      name: "contact-details",
      component: ContactDetails,
    },
    {
      path: "/contact/new",
      name: "contact-new",
      component: ContactForm,
    },
    {
      path: "/contact/:id/edit",
      name: "contact-edit",
      component: ContactEdit,
    },
  ],
});

export default router;
