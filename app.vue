<script setup>
import { Amplify, Auth } from "aws-amplify";
import awsconfig from '@/src/aws-exports'; 
Amplify.configure(awsconfig);
Auth.configure(awsconfig)
</script>

<template>
    <div>
        <NuxtLayout v-if="!loading">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
  