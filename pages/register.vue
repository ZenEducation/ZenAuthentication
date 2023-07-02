<template>
  <RegisterForm v-if="!userEmail" @setEmail = "setEmail"/>
  <RegisterOtpForm v-else :email="userEmail" @setEmail = "setEmail"/>
</template>

<script setup>
const userEmail = ref('')
const setEmail = (email) => {
  userEmail.value = email
}
</script>