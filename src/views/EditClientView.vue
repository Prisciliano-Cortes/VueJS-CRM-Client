<script setup>
    import { onMounted, reactive } from 'vue'
    //*** Route is only local, Router is for all app */
    import { useRouter, useRoute } from 'vue-router'
    import { FormKit } from '@formkit/vue'
    import ClientService from '../services/ClientService';
    import Heading from '../components/ui/Heading.vue';
    import RouterLink from '../components/ui/RouterLink.vue';

    const route = useRoute()
    const router = useRouter()

    const { id } = route.params

    defineProps({
        title: {
            type: String,
            required: true
        }
    })

    const formData = reactive({})

    onMounted( () => {
        ClientService.getOneClient(id)
        .then( ({ data }) => Object.assign(formData, data))
        .catch( error => console.log(error))
    })

    const handleSubmit = ( data ) => {
        ClientService.updateClient(id, data)
        .then( () => router.push({ name: 'list-client'}))
        .catch( error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="list-client">
                Go back
            </RouterLink>
        </div>
        <Heading>{{ title }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit 
                    type="form"
                    :actions="false"
                    incomplete-message="Could not save client"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit 
                        type="text"
                        label="First name"
                        name="firstName"
                        placeholder="First name client"
                        prefix-icon="avatarMan"
                        help="Write name client"
                        validation="required"
                        :validation-messages="{ required: 'First name client is required' }"
                        validation-visibility="blur"
                        v-model="formData.firstName"
                    />

                    <FormKit 
                        type="text"
                        label="Last name"
                        name="lastName"
                        placeholder="Las name client"
                        prefix-icon="avatarMan"
                        help="Write name client"
                        validation="required"
                        :validation-messages="{ required: 'Last name client is required' }"
                        validation-visibility="blur"
                        v-model="formData.lastName"
                    />

                    <FormKit 
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Email client"
                        prefix-icon="email"
                        help="Write email client"
                        validation="required|email"
                        :validation-messages="{ required: 'Email client is required', email: 'Email is not valid' }"
                        validation-visibility="blur"
                        v-model="formData.email"
                    />

                    <FormKit 
                        type="text"
                        label="Phone"
                        name="phone"
                        placeholder="Phone client"
                        prefix-icon="telephone"
                        help="Write phone client"
                        validation="required|+matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'Format phones is not valid' }"
                        validation-visibility="blur"
                        v-model="formData.phone"
                    />

                    <FormKit 
                        type="text"
                        label="Company"
                        name="company"
                        placeholder="Company client"
                        prefix-icon="folder"
                        help="Write company client"
                        v-model="formData.company"
                    />

                    <FormKit 
                        type="text"
                        label="Position"
                        name="position"
                        placeholder="Position client"
                        prefix-icon="check"
                        help="Write position client"
                        v-model="formData.position"
                    />

                    <FormKit 
                        type="submit"
                        label="Save client"
                        prefix-icon="add"
                    />
                </FormKit>
            </div>

        </div>
    </div>
</template>


<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>