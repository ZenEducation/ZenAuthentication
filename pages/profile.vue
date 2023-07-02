<template>
    <p class="text-center"> Profile Page</p>
    <button type="submit" class="bg-indigo-600 border px-6 py-2 inline-block text-white" @click.prevent="logout">Logout</button>
</template>

<script setup>
import { Auth } from "aws-amplify";

definePageMeta({
    middleware: 'auth-check'
})

async function logout() {
    await Auth.signOut();
    navigateTo('/')
    localStorage.removeItem("authToken");
}
</script>