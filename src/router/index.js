import {createRouter, createWebHistory} from 'vue-router';
import CharacterListNew from "../components/characters/CharacterListNew.vue"

const routes = [
    {
        path: '/',
        name: 'CharacterList',
        component: CharacterListNew
    },
  
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;