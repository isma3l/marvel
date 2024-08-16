import { RouterProvider } from 'react-router-dom';
import Router from './routes';
import { HeroesProvider } from './context';
import './styles.scss';

const App = () => (
  <HeroesProvider>
    <RouterProvider router={Router} />
  </HeroesProvider>
);

export default App;
