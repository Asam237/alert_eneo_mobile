import {App} from '../../App';

interface IRouteItem {
  name: any;
  component: any;
}

interface IRoutes {
  welcome: IRouteItem;
}

export const ROUTES: IRoutes = {
  welcome: {
    name: 'welcome',
    component: App,
  },
};
