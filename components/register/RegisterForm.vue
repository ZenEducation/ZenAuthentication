<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <div class="mt-2">
                        <input id="fullName" name="fullName" type="text" autocomplete="fullName" required
                            v-model="form.fullName"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required v-model="form.email"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="form.password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <p class="text-[red]" v-if="errorMsg.status">{{ errorMsg.message }}</p>
                <div>
                    <button type="submit" class="bg-indigo-600 border px-6 py-2 text-white" @click.prevent="register">Sign
                        up</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">

                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    @click.prevent="toSignIn">Sign
                    in</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { Auth } from "aws-amplify";

const emit = defineEmits(["setEmail"]);
const errorMsg = ref({ status: false, message: '' });
const router = useRouter();

const toSignIn = () => {
    router.push('/')
}
const form = ref({
    fullName: '',
    email: '',
    password: '',
})

const register = async () => {
    try {
        const user = await Auth.signUp({
            username: form.value.email,
            password: form.value.password,
            attributes: {
                name: form.value.fullName
            },
        });
        if (user) {
            emit("setEmail", form.signUpEmail)
            return;
        }
    } catch (error) {
        errorMsg.value.status = false;
        errorMsg.value.message = error;
    }
}
</script>