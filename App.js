import React from 'react';
import Entry from './src/components/Entry'
import styles from './src/styles/style'
import { StyleSheet,Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Start working on your app!</Text>
        <Entry />
      </View>
    );
  }
}


const TabNavigator= createBottomTabNavigator (
{

Feed :{
screen: App, navigationOptions: {

tabBarIcon: ( { focused, tintColor}) => {
return <Ionicons name = 'ios-options' size= {25} color={ tintColor} />;

}
}
}
}



);


export default TabNavigator  ;

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/