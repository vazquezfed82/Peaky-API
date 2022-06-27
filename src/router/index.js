import {createRouter, createWebHistory} from 'vue-router'
import CharacterListNew from "../components/characters/CharacterListNew.vue"
import CharacterCard from "../components/characters/CharacterCard.vue"
import Login from "../components/characters/Login.vue";
import Editar from "../components/characters/Editar.vue"
import Agregar from "../components/characters/Agregar.vue"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/personajes',
        name: 'CharacterList',
        component: CharacterListNew
    },
    {
        path: '/Character/:id',
        name: 'Character',
        component: CharacterCard
    },
    {
        path: '/Editar/:id',
        name: 'Editar',
        component: Editar
    },
    {
        path: '/Agregar',
        name: 'Agregar',
        component: Agregar
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;