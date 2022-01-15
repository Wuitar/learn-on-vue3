import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import {
    createStore
} from 'vuex'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import Todos from './components/Todos.vue'
import Composition from './components/Composition.vue'
import Teleport from './components/Teleport.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: Dashboard
        },
        {
            path: '/todos',
            component: Todos
        },
        {
            path: '/composition',
            component: Composition,
            props: {
                val: "composition props val"
            }
        },
        {
            path: '/teleport',
            component: Teleport
        }
    ]
})

const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    }
})

createApp(App).use(router).use(store).mount('#app')