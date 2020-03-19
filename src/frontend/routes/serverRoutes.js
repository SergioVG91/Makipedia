import Home from '../containers/Home';
import Login from '../components/Login';
import Registro from '../components/Registro';
import NotFound from '../components/NotFound';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Registro,
    exact: true,
  },
  {
    path: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
