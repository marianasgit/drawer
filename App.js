import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Home({ navigation }) {
  return(
    <View>
      <Text>Home Page</Text>
    </View>
  )
}

function Info() {
  return(
    <View>
      <Text>Info Page</Text>
    </View>
  )
}

function About() {
  return(
    <View>
      <Text>About Page</Text>
    </View>
  )
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation screenOptions={{
      drawerStyle: {
      } 
    }}> 
      
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Info' component={Info} />
        <Drawer.Screen name='About' component={About} />
      
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#FBF2F1'
  }
});