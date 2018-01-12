import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';


console.log("My first app....")
import {Entry} from './app/Entry'

AppRegistry.registerComponent('FloatBook', () => Entry);