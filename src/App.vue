<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between h-16 items-center">
          <router-link to="/" class="text-xl font-bold text-gray-800">
            Contact Book
          </router-link>
          <router-link
            to="/contact/new"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add New Contact
          </router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>
