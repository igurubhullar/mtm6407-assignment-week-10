import { ref, computed } from "vue";

const STORAGE_KEY = "contacts";

const contacts = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

const saveToStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts.value));
};

const addContact = (contact) => {
  contact.id = Date.now().toString();
  contacts.value.push(contact);
  saveToStorage();
  return contact.id;
};

const updateContact = (id, updatedContact) => {
  const index = contacts.value.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts.value[index] = { ...contacts.value[index], ...updatedContact };
    saveToStorage();
  }
};

const deleteContact = (id) => {
  contacts.value = contacts.value.filter((c) => c.id !== id);
  saveToStorage();
};

const getContact = (id) => {
  return contacts.value.find((c) => c.id === id);
};

const sortedContacts = computed(() => {
  return [...contacts.value].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
});

const searchContacts = (query) => {
  const searchTerm = query.toLowerCase();
  return contacts.value.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm) ||
      contact.lastName.toLowerCase().includes(searchTerm)
  );
};

export {
  contacts,
  sortedContacts,
  addContact,
  updateContact,
  deleteContact,
  getContact,
  searchContacts,
};
