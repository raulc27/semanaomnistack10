import React from 'react';
import {StatusBar,YellowBox} from 'react-native';


import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecongnized WebSocket'
]);

export default function App() {
  return (
   <>
    <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
    <Routes />
  </>
  );
}


