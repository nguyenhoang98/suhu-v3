import Home from '../pages/Home/Home';
import Male from '../pages/Male/Male';
import Female from '../pages/Female/Female';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';

const menuRouters = [
  {
    component: () => <Home />,
    path: '/Trang-chu',
    exact: true,
  },
  {
    component: () => <Male />,
    path: '/Thoi-trang-nam',
    exact: false,
  },
  {
    component: () => <Female />,
    path: '/Thoi-trang-nu',
    exact: false,
  },
  {
    component: () => <Login />,
    path: '/Dang-nhap',
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: '/Khong-tim-thay-page',
    exact: false,
  },
];
export default menuRouters;
