import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49170Navigator from '../features/BlankScreen49170/navigator';
import BlankScreen19169Navigator from '../features/BlankScreen19169/navigator';
import BlankScreen29168Navigator from '../features/BlankScreen29168/navigator';
import BlankScreen39167Navigator from '../features/BlankScreen39167/navigator';
import BlankScreen19165Navigator from '../features/BlankScreen19165/navigator';
import BlankScreen39163Navigator from '../features/BlankScreen39163/navigator';
import BlankScreen39161Navigator from '../features/BlankScreen39161/navigator';
import BlankScreen29159Navigator from '../features/BlankScreen29159/navigator';
import BlankScreen19153Navigator from '../features/BlankScreen19153/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49170: { screen: BlankScreen49170Navigator },
BlankScreen19169: { screen: BlankScreen19169Navigator },
BlankScreen29168: { screen: BlankScreen29168Navigator },
BlankScreen39167: { screen: BlankScreen39167Navigator },
BlankScreen19165: { screen: BlankScreen19165Navigator },
BlankScreen39163: { screen: BlankScreen39163Navigator },
BlankScreen39161: { screen: BlankScreen39161Navigator },
BlankScreen29159: { screen: BlankScreen29159Navigator },
BlankScreen19153: { screen: BlankScreen19153Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
