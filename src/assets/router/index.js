import { createRouter, createWebHistory } from 'vue-router'
import FormContainer from '@/views/FormContainer.vue'


const routes = [
	{
		path: '/',
		name: 'Форма',
		component: FormContainer,
	},
	{
		path: '/preview',
		name: 'Превью',
		component: () => import(/* webpackChunkName: "about" */ '@/views/PreviewContainer.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router