/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import adminView from './Components/adminView';
import addFood from './Components/manageProduct/addFood';
import listFood from './Components/manageProduct/listFood';
import viewUpdateDelete from './Components/manageProduct/viewUpdateDelete';
import viewUpdateCancel from './Components/manageProduct/viewUpdateCancel';
import viewUpdateDeleteAlert from './Components/manageProduct/viewUpdateDeleteAlert';
AppRegistry.registerComponent(appName, () =>viewUpdateDeleteAlert);
