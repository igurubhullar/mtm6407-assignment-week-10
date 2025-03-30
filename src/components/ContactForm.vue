<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { addContact, updateContact, getContact } from "../store/contacts";

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
});

const router = useRouter();
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
});

const isEditing = computed(() => !!props.id);

onMounted(() => {
  if (isEditing.value) {
    const contact = getContact(props.id);
    if (contact) {
      form.value = { ...contact };
    }
  }
});

const handleSubmit = () => {
  if (isEditing.value) {
    updateContact(props.id, form.value);
  } else {
    const newId = addContact(form.value);
    router.push(`/contact/${newId}`);
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">
        {{ isEditing ? "Edit Contact" : "New Contact" }}
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >First Name</label
          >
          <input
            v-model="form.firstName"
            type="text"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Last Name</label
          >
          <input
            v-model="form.lastName"
            type="text"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Phone</label>
          <input
            v-model="form.phone"
            type="tel"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            v-model="form.address"
            rows="3"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            v-model="form.notes"
            rows="3"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div class="flex justify-end space-x-4">
          <button
            type="button"
            @click="router.back()"
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {{ isEditing ? "Update Contact" : "Create Contact" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
