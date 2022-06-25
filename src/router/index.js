import {createRouter, createWebHistory} from 'vue-router';
import CharacterList from "../components/characters/CharacterList.vue"
import CharacterCard from "../components/characters/CharacterCard.vue"

const routes = [
    {
        path: '/',
        name: 'CharacterList',
        component: CharacterList
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