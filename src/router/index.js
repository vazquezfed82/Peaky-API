import {createRouter, createWebHistory} from 'vue-router';
import CharacterListNew from "../components/characters/CharacterListNew.vue"
import ComponenteInfo from "../components/utils/Info.vue"

const routes = [
    {
        path: '/',
        name: 'CharacterList',
        component: CharacterListNew
    },
    {
        path: '/info',
        name: 'info',
        component: ComponenteInfo
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;