/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import HomeScreen from './src/components/_HomeScreen/HomeScreen'
import HomeScreenRouter from './src/components/_HomeScreen/'
import Merchandises from './src/components/_ListMenuNavMaster/Merchandise'
import Stuffs from './src/_TESTING_/Stuff'

// import InsertMerchadises from './src/_TESTING_/insertMerchadises'
// import ListArrPicker from './src/_TESTING_/ListArrPicker'
import GetMerChandises from './src/components/_ListMenuNavMaster/Containers/getMerChandises'
import InsertMerchandises from './src/components/_ListMenuNavMaster/Containers/insertMerchandises'
export default class App extends Component<Props> {
  render() {
    return (
       <HomeScreenRouter />
    );
  }
}
