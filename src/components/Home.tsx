import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Screens} from '../../NavigationConfig';

const Home = () => {
  const navigation = useNavigation();

  const switchScreen = useCallback(() => {
    navigation.navigate(Screens.Menu as never);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Pressable style={styles.button} onPress={switchScreen}>
        <Text style={styles.text}>Navigate to Menu</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  text: {
    padding: 10,
  },
});
