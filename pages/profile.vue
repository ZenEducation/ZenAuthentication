<template>
    <p class="text-center"> Profile Page</p>
    <button type="submit" class="bg-indigo-600 border px-6 py-2 inline-block text-white" @click.prevent="logout">Logout</button>
</template>

<script setup>
definePageMeta({
    middleware: 'auth-check'
})

async function logout() {
    await Auth.signOut();
    if (this.isAuthenticated === true) {
        this.isAuthenticated = false;
    }
    localStorage.removeItem("authToken");
    this.user = null;
    if (!this.user) {
        console.log("User successfully logged out");
    }
}
</script>