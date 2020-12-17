/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import adminView from './Components/adminView';
import addFood from './Components/manageProduct/addFood';
import listFood from './Components/manageProduct/listFood';
AppRegistry.registerComponent(appName, () =>listFood);
