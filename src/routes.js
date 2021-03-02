import Form from './components/Form';
import Id from './components/Id';
export const routes = [
    {
        path: '',
        component: Form,
    },
{
      path: '/blog/:id',
      component: Id
    }
]