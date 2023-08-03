import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
            path: '/',
            name: 'list-client',
            component: () => import(/* webpackChunkName: "List Client" */ '../views/ClientView.vue'),
            props: {
                title: 'List Client'
            }
        },
        {
            path: '/add-client',
            name: 'add-client',
            component: () => import(/* webpackChunkName: "New Client" */ '../views/NewClientView.vue'),
            props: {
                title: 'Add Client'
            }
        },
        {
            path: '/edit-client/:id',
            name: 'edit-client',
            component: () => import(/* webpackChunkName: "Edit Client" */ '../views/EditClientView.vue'),
            props: {
                title: 'Edit Client'
            }
        }
    ]
})

export default router
