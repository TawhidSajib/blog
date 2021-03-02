import Form from './components/Form';
import Id from './components/Id';
export const routes = [
    {
        path: '/users-detail/',
        component: Form,
        children: [
            {
                path: ':id',
                component: Id
            }
        ]
    }
]