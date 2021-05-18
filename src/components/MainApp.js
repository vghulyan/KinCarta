import React from 'react';

import CaseStudies from './CaseStudies';
import CurrentSection from './CurrentSection';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from '../styles';

const Stack = createStackNavigator();

const MainApp = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CaseStudies"
        screenOptions={({route, navigation}) => ({})}>
        <Stack.Screen
          name="CaseStudies"
          component={CaseStudies}
          options={{
            title: 'Case Studies',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="CurrentSection"
          component={CurrentSection}
          options={{
            title: 'Section Page', //Set Header Title
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
