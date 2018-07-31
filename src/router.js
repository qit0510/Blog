import Vue from 'vue'
import Router from 'vue-router'
import Home from './front/views/Home.vue'
import ItemList from './front/views/itemList.vue'
import Article from './front/views/Article.vue'
import Login from './admin/views/Login.vue'
import AdminHome from './admin/views/AdminHome.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/itemList/:type',
            name: 'itemList',
            component: ItemList
        },
        {
            path: '/article/:id',
            name: 'article',
            component: Article
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/Admin',
            name: 'Admin',
            component: AdminHome,
            children: [{
                path: 'artlist',
                name: 'ArtList',
                component: () => import('./admin/views/main/ArtList.vue')
            }, {
                path: 'artedit',
                name: 'ArtEdit',
                component: () => import('./admin/views/main/ArtEdit.vue')
            },{
                path: 'topic',
                name: 'Topic',
                component: () => import('./admin/views/main/TopicAdd.vue')
            },{
                path: 'topiclist',
                name: 'TopicList',
                component: () => import('./admin/views/main/TopicList.vue')
            },{
                path: 'tag',
                name: 'Tag',
                component: () => import('./admin/views/main/Tag.vue')
            }

            ]
        },
    ]
})
