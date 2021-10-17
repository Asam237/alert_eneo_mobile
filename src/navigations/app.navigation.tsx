import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR, SPACING} from '../assets/themes/globals';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';
import {Menu, MenuItem} from 'react-native-material-menu';
import {LANGUAGE} from '../constants/languages';

const Stack = createStackNavigator();

const navigationRef = React.createRef();
export function navigate(name: string) {
  (navigationRef as any).current?.navigate(name);
}

export const AppNavigation = () => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    // console.log('Navigation::::::::::::', navigate('about'));
    navigate('about');
    setVisible(false);
  };
  const showMenu = () => setVisible(true);

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
                <View style={styles.container__main}>
                  <Menu
                    visible={visible}
                    anchor={
                      <TouchableOpacity onPress={showMenu}>
                        <FontAwesomeIcon
                          icon={faAlignJustify}
                          color={COLOR.secondaryColor}
                          size={SPACING.medium}
                        />
                      </TouchableOpacity>
                    }
                    onRequestClose={hideMenu}>
                    <MenuItem onPress={hideMenu}>A propos</MenuItem>
                    {/* <MenuItem disabled>Disabled item</MenuItem> */}
                  </Menu>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.about.name}
          component={ROUTES.about.component}
          options={{
            headerTitle: 'A propos',
            headerTintColor: COLOR.secondaryColor,
            headerStyle: {
              backgroundColor: COLOR.primaryColor,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              color: COLOR.secondaryColor,
              fontSize: SPACING.medium,
            },
          }}
        />
        <Stack.Screen
          name={ROUTES.detail.name}
          component={ROUTES.detail.component}
          options={{
            headerTitle: 'ENEO Cameroon',
            headerTintColor: COLOR.secondaryColor,
            headerStyle: {
              backgroundColor: COLOR.primaryColor,
            },
            headerTitleAlign: 'left',
            headerTitleStyle: {
              color: COLOR.secondaryColor,
              fontSize: SPACING.medium,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container__main: {
    height: SPACING.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.small,
  },
});
