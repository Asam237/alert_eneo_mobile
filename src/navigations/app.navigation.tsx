import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const navigationRef = React.createRef();
export function navigate(name: string) {
  (navigationRef as any).current?.navigate(name);
}

export const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
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
