/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import EmailPassAuth from './EmailPassAuth'

AppRegistry.registerComponent(appName, () => EmailPassAuth);
