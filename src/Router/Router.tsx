// router.js
import { useRoutes } from 'react-router-dom';
import { Homepage } from '../components/homepage/Homepage';
import { PrivateRoute } from './PrivateRoute';
import Categories from '../components/Routes/Categories';
import TopArtists from '../components/Routes/TopArtists/TopArtists';
import TopSongs from '../components/Routes/TopSongs/TopSongs';
import TopGenres from '../components/Routes/TopGenres/TopGenres';

const routes = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/categories',
    element: <PrivateRoute component={<Categories/>} /> ,
    children:[
      {
          path: 'topArtists',
          element: <TopArtists/>,
      },
      {
        path: 'topSongs',
        element: <TopSongs/>,
    },
    {
      path: 'topGenres',
      element: <TopGenres/>,
  },
      {
        path: '',
        element: <TopArtists/>,
      },
    ]
  },
  {
    path: '*',
    element: <Homepage/>,
  },
];

export function AppRouter() {
  const routeResult = useRoutes(routes);
    
  return routeResult;
}
