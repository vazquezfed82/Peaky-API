import {createRouter, createWebHistory} from 'vue-router';
import CharacterListNew from "../components/characters/CharacterListNew.vue"
import CharacterCard from "../components/characters/CharacterCard.vue"

const routes = [
    {
        path: '/',
        name: 'CharacterList',
        component: CharacterListNew
    },
    {
        path: '/Character/:id',
        name: 'Character',
        component: CharacterCard
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;