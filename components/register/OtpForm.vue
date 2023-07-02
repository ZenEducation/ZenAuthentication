<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Verify your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Enter OTP</label>
                    <div class="mt-2">
                        <input id="fullName" name="fullName" type="text" autocomplete="fullName" required v-model="form.otp"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <p class="text-[red]" v-if="errorMsg.status">{{ errorMsg.message }}</p>
                <div>
                    <button type="submit" class="bg-indigo-600 border px-6 py-2 text-white"
                        @click.prevent="onSubmit">Submit</button>
                </div>
            </form>


        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { Auth } from "aws-amplify";

const router = useRouter();
const props = defineProps({
    email: {
        type: String,
        default: null,
    }
})

const form = reactive({
    otp: "",
});

const errorMsg = ref({ status: false, message: '' });

const onSubmit = async () => {
    try {
       
        const user = await Auth.confirmSignUp(props.email, form.otp);
        console.log(user)
        if (user) {
            router.push("/");
        }
    } catch (error) {
        errorMsg.value.status = true;
        errorMsg.value.message = error;
    }
}
</script>