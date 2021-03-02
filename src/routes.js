import Form from './components/Form';
import Id from './components/Id';
export const routes = [
    {
        path: '/blog',
        component: Form,
    },
    {
        path: '/blog/:id',
        component: Id
    }
]