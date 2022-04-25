import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Screens} from './NavigationConfig';
import Home from './src/components/Home';
import Menu from './src/components/Menu';
import Setting from './src/components/Setting';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Screens.Setting}
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const AppContainer: React.FC = () => {
  const isLogined = true;
  const NavigationStack = useMemo(() => {
    return (
      <NavigationContainer>
        {!isLogined ? (
          <Stack.Navigator initialRouteName={Screens.AppTab}>
            <Stack.Screen
              name={Screens.AppTab}
              component={AppTab}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name={Screens.Home}
              component={Home}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name={Screens.Menu}
              component={Menu}
              options={{title: 'Menu'}}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name={Screens.Login}
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={Screens.Register}
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }, []);
  return <React.Fragment>{NavigationStack}</React.Fragment>;
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});
