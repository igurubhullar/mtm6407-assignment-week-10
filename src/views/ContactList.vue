<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { sortedContacts, searchContacts } from "../store/contacts";

const router = useRouter();
const searchQuery = ref("");

const filteredContacts = computed(() => {
  if (!searchQuery.value) return sortedContacts.value;
  return searchContacts(searchQuery.value);
});

const navigateToContact = (id) => {
  router.push(`/contact/${id}`);
};

const navigateToNewContact = () => {
  router.push("/contact/new");
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Contact Book</h1>
      <button
        @click="navigateToNewContact"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
      >
        Add New Contact
      </button>
    </div>

    <div class="mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search contacts..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="grid gap-4">
      <div
        v-for="contact in filteredContacts"
        :key="contact.id"
        @click="navigateToContact(contact.id)"
        class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
      >
        <h2 class="text-xl font-semibold text-gray-800">
          {{ contact.firstName }} {{ contact.lastName }}
        </h2>
        <p class="text-gray-600">{{ contact.email }}</p>
      </div>
    </div>

    <div
      v-if="filteredContacts.length === 0"
      class="text-center text-gray-500 mt-8"
    >
      No contacts found
    </div>
  </div>
</template>
