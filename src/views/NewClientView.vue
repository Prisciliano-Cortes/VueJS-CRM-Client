<script setup>
    //*** Route is only local, Router is for all app */
    import { useRouter } from 'vue-router'
    import { FormKit } from '@formkit/vue'
    import ClientService from '../services/ClientService';
    import Heading from '../components/ui/Heading.vue';
    import RouterLink from '../components/ui/RouterLink.vue';

    const router = useRouter()

    defineProps({
        title: {
            type: String,
            required: true
        }
    })

    const handleSubmit = ( data ) => {
        data.status = 1
        ClientService.addClient( data )
        .then( res => {
            console.log(res);
            router.push({ name: 'list-client' })
        })
        .catch( error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="list-client">
                List client
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
                    />

                    <FormKit 
                        type="text"
                        label="Company"
                        name="company"
                        placeholder="Company client"
                        prefix-icon="folder"
                        help="Write company client"
                    />

                    <FormKit 
                        type="text"
                        label="Position"
                        name="position"
                        placeholder="Position client"
                        prefix-icon="check"
                        help="Write position client"
                    />

                    <FormKit 
                        type="submit"
                        label="Add client"
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