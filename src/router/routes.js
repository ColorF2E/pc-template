import config from 'config';

const NotFound = () => import('views/errors/Not_found');
const ServerError = () => import('views/errors/Server_error');

const Portal = () => import('portal');
const Dashboard = () => import('views/Dashboard.vue');

let routes = [
    { path: '/', redirect: `/${config.root}/dashboard` },
    {
        path: `/${config.root}`, component: Portal,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: '404', component: NotFound },
            { path: '500', component: ServerError },
        ]
    },
    { path: '*', redirect: { path: `/${config.root}/404` } }
];

export default routes;
