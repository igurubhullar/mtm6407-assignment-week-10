<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getContact, deleteContact } from "../store/contacts";

const route = useRoute();
const router = useRouter();

const contact = computed(() => {
  return getContact(route.params.id);
});

const handleDelete = () => {
  if (confirm("Are you sure you want to delete this contact?")) {
    deleteContact(route.params.id);
    router.push("/");
  }
};

const handleEdit = () => {
  router.push(`/contact/${route.params.id}/edit`);
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="contact" class="max-w-2xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Contact Details</h1>
        <div class="space-x-4">
          <button
            @click="handleEdit"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Edit Contact
          </button>
          <button
            @click="handleDelete"
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Delete Contact
          </button>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <div class="space-y-4">
          <div>
            <h2 class="text-sm font-medium text-gray-500">Name</h2>
            <p class="text-xl text-gray-900">
              {{ contact.firstName }} {{ contact.lastName }}
            </p>
          </div>
          <div>
            <h2 class="text-sm font-medium text-gray-500">Email</h2>
            <p class="text-xl text-gray-900">{{ contact.email }}</p>
          </div>
          <div v-if="contact.phone">
            <h2 class="text-sm font-medium text-gray-500">Phone</h2>
            <p class="text-xl text-gray-900">{{ contact.phone }}</p>
          </div>
          <div v-if="contact.address">
            <h2 class="text-sm font-medium text-gray-500">Address</h2>
            <p class="text-xl text-gray-900">{{ contact.address }}</p>
          </div>
          <div v-if="contact.notes">
            <h2 class="text-sm font-medium text-gray-500">Notes</h2>
            <p class="text-xl text-gray-900">{{ contact.notes }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500 mt-8">Contact not found</div>
  </div>
</template>
