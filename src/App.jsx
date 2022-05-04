import { Route, Switch } from 'react-router-dom';
import DetailPage from './views/DetailPage';
import ListPage from './views/ListPage';

export default function App() {
  return (
    <Switch>
      <Route path='/houses/:id'>
        <DetailPage />
      </Route>
      <Route path='/'>
        <ListPage />
      </Route>
    </Switch>
  );
}