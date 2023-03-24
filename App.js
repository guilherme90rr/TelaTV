import react from 'react'
import {View} from 'react-native';

export default function App(){
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', flex: 5}}>
        <View style={{backgroundColor: 'white', flex: 1}}></View>
        <View style={{backgroundColor: 'yellow', flex: 1}}></View>
        <View style={{backgroundColor: 'cyan', flex: 1}}></View>
        <View style={{backgroundColor: 'lime', flex: 1}}></View>
        <View style={{backgroundColor: 'magenta', flex: 1}}></View>
        <View style={{backgroundColor: 'red', flex: 1}}></View>
        <View style={{backgroundColor: 'blue', flex: 1}}></View>
      </View>

      <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{backgroundColor: 'darkblue', flex: 1}}></View>
          <View style={{backgroundColor: 'white', flex: 1}}></View>
          <View style={{backgroundColor: 'purple', flex: 1}}></View>
          <View style={{backgroundColor: 'black', flex: 3}}></View>
    </View>
  </View>
  );
}

