import Client from "./pages/Client";
import Form from "./pages/Form";
import Enterprise from "./pages/Enterprise";
import About from "./pages/About";

const routes = [
    {
        path: '/',
        exact: true,
        component: Client
    },
    {
        path: '/form',
        exact: true,
        component: Form
    },
    {
        path: '/enterprise',
        exact: true,
        component: Enterprise
    },
    {
        path: '/about',
        exact: true,
        component: About
    }
];

export default routes;
