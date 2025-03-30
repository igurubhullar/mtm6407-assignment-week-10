<script setup>
import { useRoute } from "vue-router";
import ContactForm from "../components/ContactForm.vue";

const route = useRoute();
</script>

<template>
  <ContactForm :id="route.params.id" />
</template>
