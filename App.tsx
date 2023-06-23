import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from './src/containers/Feed';
import Chat from './src/containers/Chat';
import Notifications from './src/containers/Notifications';
import Profile from './src/containers/Profile';
import {BottomBar} from './src/components/BottomBar/BottomBar';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <BottomBar {...props} />}>
          <Tab.Screen
            name="Feed"
            component={Feed}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Notification"
            component={Notifications}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
