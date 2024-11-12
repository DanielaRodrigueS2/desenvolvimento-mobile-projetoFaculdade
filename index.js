/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TelaLogin from './src/screens/login';
import home from './src/screens/home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => home);
