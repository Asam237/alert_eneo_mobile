import {About} from '../screens/about/About.screen';
import {Detail} from '../screens/detail/Detail.screen';
import {Home} from '../screens/home/Home.screen';
import {Welcome} from '../screens/welcome/Welcome.screen';

interface IRouteItem {
  name: any;
  component: any;
}

interface IRoutes {
  welcome: IRouteItem;
  home: IRouteItem;
  about: IRouteItem;
  detail: IRouteItem;
}

export const ROUTES: IRoutes = {
  welcome: {
    name: 'welcome',
    component: Welcome,
  },
  home: {
    name: 'home',
    component: Home,
  },
  about: {
    name: 'about',
    component: About,
  },
  detail: {
    name: 'detail',
    component: Detail,
  },
};
