import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {COLOR, SPACING} from '../assets/themes/globals';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';

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
        <Stack.Screen
          name={ROUTES.home.name}
          component={ROUTES.home.component}
          options={{
            headerTitle: 'ENEO Cameroon',
            headerStyle: {
              backgroundColor: COLOR.primaryColor,
            },
            headerLeft: () => null,
            headerTitleAlign: 'left',
            headerTitleStyle: {
              color: COLOR.secondaryColor,
              fontSize: SPACING.medium,
            },
            headerRight: () => {
              return (
                <View
                  style={{flexDirection: 'row', marginRight: SPACING.small}}>
                  <TouchableOpacity style={{marginRight: SPACING.small}}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      color={COLOR.secondaryColor}
                      size={SPACING.xmedium}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesomeIcon
                      icon={faAlignJustify}
                      color={COLOR.secondaryColor}
                      size={SPACING.xmedium}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
