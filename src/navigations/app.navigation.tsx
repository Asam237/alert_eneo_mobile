import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import {StatusBar} from 'react-native';
import {COLOR} from '../assets/themes/globals';

const Stack = createStackNavigator();

const navigationRef = React.createRef();
export function navigate(name: string) {
  (navigationRef as any).current?.navigate(name);
}

export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={COLOR.primaryColor} />
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.welcome.name}
          component={ROUTES.welcome.component}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
