import { createRouter, createWebHistory } from 'vue-router';
import Indicators from './components/Indicators.vue';
import Panel from "@/components/Panel.vue";
import Map from "@/components/Map.vue";
import Home from "@/components/Home.vue";
import Events from "@/components/Events.vue";
import Reports from "@/components/Reports.vue";
import Notifications from "@/components/Notifications.vue";
const routes = [
    {
        path: '/object/panel',
        name: 'Panel',
        component: Panel
    },
    {
        path: '/object/indicators',
        name: 'Indicators',
        component: Indicators
    },
    {
        path: '/object/events',
        name: 'Events',
        component: Events
    },
    {
        path: '/object/reports',
        name: 'Reports',
        component: Reports
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/map/',
        name: 'Map',
        component: Map
    },
    {
        path: '/map/',
        name: 'Map',
        component: Map
    },
    {
        path: '/reports/',
        name: 'Reports',
        component: Reports
    },
    {
        path: '/notifications/',
        name: 'Notifications',
        component: Notifications
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
